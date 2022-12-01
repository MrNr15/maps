
<script>

    import { onMount } from 'svelte';
    import { missing_component } from 'svelte/internal';

    var zoom = 100
    var start_x = 0
    var start_y = 0
    var map_x = 0
    var map_y = 0
    var mouse_x = 0
    var mouse_y = 0
    var mousedown = false
    var result
    var floor = 1
    var standart_scale = 1
    onMount(() => {



        image_zoom("image-zoom")
        
        function image_zoom(resultID){
            
            var main = document.getElementById("main")
            result = document.getElementById(resultID)
        
            result.style.backgroundImage = "url('../Worldmap_" + floor + ".jpg')"
            standart_scale = 1/(window.innerWidth/window.innerHeight*1280/2560)
            //console.log(standart_scale)
            //zoom *= standart_scale
            result.style.backgroundSize = zoom + "%"

        
            main.addEventListener("mousemove", movelens)
            main.addEventListener("touchmove", touchlens)
            main.addEventListener("mousedown", mousedown)
            main.addEventListener("mouseup", mouseup)
            main.addEventListener("touchstart", touchdown)
            main.addEventListener("touchend", mouseup)

            map_x = -window.innerWidth/2
            map_y = -window.innerHeight/2

            function movelens(e){
                if (mousedown){
                    var e = window.event;
                    var x = (e.clientX - mouse_x)/zoom*100 + start_x
                    var y = (e.clientY - mouse_y)/zoom*100 + start_y
                    //x = Math.max(Math.min(-window.innerWidth/2/zoom*100,x), window.innerWidth*(-zoom/100 + 1 + 50/zoom))
                    //y = Math.max(Math.min(-window.innerHeight/2/zoom*100,y), -window.innerHeight*zoom/((window.innerHeight/1280*2560)/window.innerWidth * 100) + window.innerHeight+window.innerHeight/2/zoom*100)

                    result.style.backgroundPosition = "" + parseInt(x*zoom/100 + window.innerWidth/2) + "px " + parseInt(y*zoom/100 + window.innerHeight/2) + "px"
                    map_x = x
                    map_y = y

                    console.log(x, " ", y)
                }
            }

            function touchlens(e){
                if (mousedown){
                    var e = window.event;
                    var x = e.touches[0].clientX - mouse_x + start_x
                    var y = e.touches[0].clientY - mouse_y + start_y
                    result.style.backgroundPosition = "" + parseInt(x) + "px " + parseInt(y) + "px"
                    map_x = x
                    map_y = y
                }
            }

            function mousedown(e){
                var e = window.event;
                mousedown = true
                mouse_x = e.clientX
                mouse_y = e.clientY
            }

            function touchdown(e){
                var e = window.event;
                mousedown = true
                mouse_x = e.touches[0].clientX;
                mouse_y = e.touches[0].clientY;
            }

            function mouseup(){
                mousedown = false
                start_x = map_x
                start_y = map_y
            }

            mouseup()
            update()

    }

    var true_zoom = 100

        /*function updatePage() {
            if (true_zoom < zoom){
                true_zoom+=1
            }
            if (true_zoom > zoom){
                true_zoom-=1
            }
            result.style.backgroundSize = true_zoom + "%"
        }
        // This will call updatePage(x) every 5000ms
        setInterval(() => {updatePage()}, 1000/60);*/

})
function zoomin(){
    if (zoom != 400){
        zoom *= 2
        update()
    }
}
function zoomout(){
    if (zoom != 100){
        zoom /= 2
        update()
    }
}
function floorup(){
    if (floor != 3){
        floor += 1
        result.style.backgroundImage = "url('../Worldmap_" + floor + ".jpg')"
    }
}
function floordown(){
    if (floor != 1){
        floor -= 1
        result.style.backgroundImage = "url('../Worldmap_" + floor + ".jpg')"
    }
}
function update(){
        var e = window.event;
        var x = start_x
        var y = start_y
        result.style.backgroundPosition = "" + parseInt(x*zoom/100 + window.innerWidth/2) + "px " + parseInt(y*zoom/100 + window.innerHeight/2) + "px"
        result.style.backgroundSize = zoom + "%"
        start_x = x
        start_y = y
}

</script>

<meta name="viewport" content="width=device-width, inital-scale=1, user-scalable=no">

<div id="main" class="main">
    <div class="img-wrapper">
        <div id="image-zoom" class="img-zoom-result">
            <button on:click={zoomin}>
                +
            </button>
            <button on:click={zoomout}>
                -
            </button>
            <button on:click={floorup}>
                Floor up
            </button>
            <button on:click={floordown}>
                Floor down
            </button>
        </div>
    </div>

</div>
    
<style>

    :root{
        margin: 0%;
        overflow: hidden;
    }

    .main{
        width: 100%;
        height: 100vh;
        margin: 0;
    }

    .img-wrapper{width: 100vw;
        position: relative;
    }

    .img-zoom-lens{
        position: absolute;
        border: 1px solid #000000;
        width: 40px;
        height: 40px;
    }

    .img-zoom-result{
        background-image: url('../Worldmap_1.jpg');
        background-color: white;
        width: 100%;
        height: 100vh;
        background-repeat: no-repeat;
        touch-action: none;
        background-position: center;
        background-size: cover;
    }

    .img{
        pointer-events: none;
    }

</style>