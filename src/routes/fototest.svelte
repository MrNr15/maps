<script defer>

    import { onMount } from 'svelte';

    var count = 1;
    var grid = [];

    const dirsx = [1,1,0,-1,-1,-1,0,1]
    const dirsy = [0,1,1,1,0,-1,-1,-1]
    
    const width = 160
    const height = 90
    
    let mousex = 0
    let mousey = 0
    let mousedown = false
    
    let canvas_width = 0
    
    onMount(() => {

        const canvas = document.querySelector("#canvas");
        const canvascontext = canvas.getContext("2d");
        
        function mousemove(event){
            mousex = parseInt(event.clientX / canvas.offsetWidth * width)
            mousey = parseInt(event.clientY / canvas.offsetHeight * height)
        }

        window.addEventListener('mousemove', mousemove);

        window.addEventListener('mousedown', () => {
            if (window.outerWidth > 10){
                mousedown = true
            }
        })

        window.addEventListener('mouseup', () => {
            mousedown = false
        })



        function step(){
            const w = width
            const h = height

            var grid_copy = grid.slice()

            //iterate over all pixels based on x and y coordinates
            for(var y = 0; y < h; y++) {
                // loop through each column
                for(var x = 0; x < w; x++) {
                    
                    
                    let number = 0;

                    for (var i = 0; i < 8; i++){
                        let add = grid[(w * (y+dirsy[i])) + x+dirsx[i]]
                        if (add == undefined){
                            add = 0
                        }
                        number += add
                    }
                    var id = w * y + x
                    if (number == 3){
                        grid_copy[id] = 1
                    }else if(number == 2 && grid[id] == 1){
                        grid_copy[id] = 1
                    }else{
                        grid_copy[id] = 0

                    }

                }
            }

            grid = grid_copy
        }
        
        
        function generate_grid(){
            grid = [];
            for (var i=0;i<width*height;i++){
                grid.push(parseInt(Math.random()*2))
            }

        }

        generate_grid()
        
        
        let image = new Image();
            
        image.addEventListener("load", () => {
            canvas.width = width
            canvas.height = height
            canvascontext.drawImage(image,0,0)

            var imagedata = canvascontext.getImageData(0,0,width, height);
            var data = imagedata.data

            for (var i = 0, n = grid.length; i < n; i+=1){
                data[i*4] = 0
                data[i*4 + 1] = 0
                data[i*4 + 2] = 0
            }

            //242 191 34 13
            
            canvascontext.putImageData(imagedata, 0, 0)

            render_image()
        });

        image.src = "Solar-Sim.png"
        
        function render_image(){
            var imagedata = canvascontext.getImageData(0,0,width, height);
            var data = imagedata.data

            for (var i = 0, n = grid.length; i < n; i+=1){
                var data_value = (data[i*4 + 1] + 20) * grid[i]
                data[i*4] = data_value * 1.5
                data[i*4 + 1] = data_value
                data[i*4 + 2] = data_value * 2.25
            }

            if (mousedown){
                for (let i = 0; i < 3; i++){
                    data[((width * mousey) + mousex) * 4+i] = 255
                    data[((width * mousey) + mousex+1) * 4+i] = 255
                    data[((width * mousey) + mousex-1) * 4+i] = 255
                    data[((width * (mousey+1)) + mousex) * 4+i] = 255
                    data[((width * (mousey-1)) + mousex) * 4+i] = 255
                }
            }
            
            canvascontext.putImageData(imagedata, 0, 0)
            
        }

        animate()

        function animate() {
            setTimeout(function() {

                step()

                if (mousedown){
                    grid[mousey * width + mousex] = 1
                    grid[mousey * width + mousex+1] = 1
                    grid[mousey * width + mousex-1] = 1
                    grid[(mousey+1) * width + mousex] = 1
                    grid[(mousey-1) * width + mousex] = 1
                }

                render_image()

                requestAnimationFrame(animate);
            }, 1000 / 30);
        }

    })
    
</script>

<canvas class="main" id="canvas" height="500" width="500"></canvas>
    
<style>
    canvas{
        image-rendering: pixelated;
    }
    
    .main{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: var(--grey);
        min-width: 100vw;
        min-height: 100vh;
        text-align: center;
        filter: brightness(0.65);
        
    }

</style>