
<script>

    import { onMount } from 'svelte';

    onMount(() => {

        var start_x = 0
        var start_y = 0
        var map_x = 0
        var map_y = 0
        var mouse_x = 0
        var mouse_y = 0
        var mousedown = false

        image_zoom("image-zoom")
        
        function image_zoom(resultID){
            
            var result
            var main = document.getElementById("main")
            result = document.getElementById(resultID)
        
            result.style.backgroundImage = "url('../Map.png')"
            result.style.backgroundSize = 500 + "px " +300 + "px"
        
            main.addEventListener("mousemove", movelens)
            main.addEventListener("touchmove", touchlens)
            main.addEventListener("mousedown", mousedown)
            main.addEventListener("mouseup", mouseup)
            main.addEventListener("touchstart", touchdown)
            main.addEventListener("touchend", mouseup)

            function movelens(e){
                if (mousedown){
                    var e = window.event;
                    var x = e.clientX - mouse_x + start_x
                    var y = e.clientY - mouse_y + start_y
                    result.style.backgroundPosition = "" + parseInt(x) + "px " + parseInt(y) + "px"
                    result.style.backgroundSize = "100%"
                    map_x = x
                    map_y = y
                }
            }

            function touchlens(e){
                if (mousedown){
                    var e = window.event;
                    var x = e.touches[0].clientX - mouse_x + start_x
                    var y = e.touches[0].clientY - mouse_y + start_y
                    result.style.backgroundPosition = "" + parseInt(x) + "px " + parseInt(y) + "px"
                    result.style.backgroundSize = "100%"
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

    }
    
})
</script>

<meta name="viewport" content="width=device-width, inital-scale=1">

<div id="main" class="main">
    <div class="img-wrapper">
        <div id="image-zoom" class="img-zoom-result"></div>
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
        background-color: black;
        width: 100%;
        height: 100vh;
    }

    .img{
        pointer-events: none;
    }

</style>