
<script>

    import { onMount } from 'svelte';


    var zoom = 100
    var start_x = 0
    var start_y = 0
    var map_x = 0
    var map_y = 0
    var mouse_x = 0
    var mouse_y = 0
    var result
    var floor = 1
    var floor_text = "EG"
    onMount(() => {

        if (window.innerWidth < 800){
            zoom = 200
        }

        const resizer = () => {
            document.getElementById("image-zoom").style.height = window.innerHeight + "px";
        }

        window.addEventListener("resize", (_e) => resizer());
        document.addEventListener("DOMContentLoaded", (_e) => resizer());

        image_zoom("image-zoom")
        
        function image_zoom(resultID){
            
            var main = document.getElementById("main")
            result = document.getElementById(resultID)
        
            result.style.backgroundImage = "url('../Waldschule " + 0 + ".svg')"
            result.style.backgroundImage = "url('../Waldschule " + 1 + ".svg')"
            result.style.backgroundImage = "url('../Waldschule " + 2 + ".svg')"
            result.style.backgroundImage = "url('../Waldschule " + 3 + ".svg')"
            result.style.backgroundImage = "url('../Waldschule " + floor + ".svg')"
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
            map_y = -window.innerWidth*0.5/2

            function movelens(e){
                if (mousedown){
                    var e = window.event;
                    var x = (e.clientX - mouse_x)/zoom*100 + start_x
                    var y = (e.clientY - mouse_y)/zoom*100 + start_y
                    result.style.backgroundPosition = "" + parseInt(x*zoom/100 + window.innerWidth/2) + "px " + parseInt(y*zoom/100 + window.innerHeight/2) + "px"
                    map_x = x
                    map_y = y
                }
            }

            function touchlens(e){
                if (mousedown){
                    var e = window.event;
                    var x = (e.touches[0].clientX - mouse_x)/zoom*100 + start_x
                    var y = (e.touches[0].clientY - mouse_y)/zoom*100 + start_y
                    result.style.backgroundPosition = "" + parseInt(x*zoom/100 + window.innerWidth/2) + "px " + parseInt(y*zoom/100 + window.innerHeight/2) + "px"
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
    if (zoom != 800){
        zoom *= 2
        update()
    }
}
function zoomout(){
    if (zoom != 50){
        zoom /= 2
        update()
    }
}

function floorup(){
    if (floor != 3){
        floor += 1
        result.style.backgroundImage = "url('../Waldschule " + floor + ".svg')"
        set_floor_text()
    }
}
function floordown(){
    if (floor != 0){
        floor -= 1
        result.style.backgroundImage = "url('../Waldschule " + floor + ".svg')"
        set_floor_text()
    }
}
function set_floor_text(){
    if (floor==0){
            floor_text = "UG"
        }
        if (floor==1){
            floor_text = "EG"
        }
        if (floor==2){
            floor_text = "1.OG"
        }
        if (floor==3){
            floor_text = "2.OG"
        }
}
function update(){
        window.scrollY = 0
        window.scrollX = 0
        var e = window.event;
        var x = start_x
        var y = start_y
        result.style.backgroundPosition = "" + parseInt(x*zoom/100 + window.innerWidth/2) + "px " + parseInt(y*zoom/100 + window.innerHeight/2) + "px"
        result.style.backgroundSize = zoom + "%"
        start_x = x
        start_y = y
}

</script>

<svelte:head>
	<title>Waldschule Maps</title>
</svelte:head>

<meta name="viewport" content="width=device-width, inital-scale=1, user-scalable=no">
<body style = "margin:0">
    <div id="main" class="main">
        <div class="img-wrapper">
            <div id="image-zoom" class="img-zoom-result">
                <div class="zoom bottom-left">
                    <img src="../zoom_in.svg" class="zoom-in" on:click={zoomin}><img src="../zoom_out.svg" class="zoom-out" on:click={zoomout}>
                </div>
                <div class="bottom-right">
                    <a href="http://bit.ly/3WnnGyS">
                        <div class="container360">
                            <img src="../360.svg" class="view360" on:click={floorup}>
                        </div>
                    </a>
                    <div class="floor_counter">
                        <div class="text">
                            {floor_text}
                        </div>
                    </div>
                    <div class="zoom">
                        <img src="../Up.svg" class="zoom-in" on:click={floorup}><img src="../Down.svg" class="zoom-out" on:click={floordown}>
                    </div>
                </div>
                <img class="logo" src="../Waldschule-Schwanewede-Logo.png" alt="">
            </div>
        </div>
    </div>
</body>
    
    
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    :root{
        margin: 0%;
        overflow: hidden;
    }

    .main{
        width: 100%;
        height: 100vh;
        margin: 0;
    }

    .img-wrapper{
        width: 100vw;
        position: relative;
    }

    .img-zoom-result{
        background-image: url('../Waldschule 1.svg');
        background-color: white;
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        touch-action: none;
        background-position: center;
        background-size: cover;
    }

    .zoom{
        margin: 0;
        width: fit-content;
        display: flex;
        flex-direction: column;
    }

    .zoom-in{
        width: 3em;
        border-style: solid solid none solid;
        border-color: grey;
        border-width: 0.3em;
        padding: 0.8em;
        -webkit-border-radius: 2.5em 2.5em 0 0;
        -moz-border-radius: 2.5em 2.5em 0 0;
        border-radius: 2.5em 2.5em 0 0;
        background-color: lightgrey;
    }

    
    .zoom-out{
        width: 3em;
        border-style: none solid solid solid;
        border-color: grey;
        border-width: 0.3em;
        padding: 0.8em;
        -webkit-border-radius: 0 0 2.5em 2.5em;
        -moz-border-radius: 0 0 2.5em 2.5em;
        border-radius: 0 0 2.5em 2.5em;
        background-color: lightgrey;
    }

    .floor_counter{
        line-height: 3em;
        width: 3em;
        height: 3em;
        padding: 0.8em;
        text-align: center;
        border-style: solid solid solid solid;
        border-color: grey;
        border-width: 0.3em;
        -webkit-border-radius: 2.5em 2.5em 2.5em 2.5em;
        -moz-border-radius: 2.5em 2.5em 2.5em 2.5em;
        border-radius: 2.5em 2.5em 2.5em 2.5em;
        background-color: lightgrey;
        margin-bottom: 1em;
    }

    .text{
        font-size: 1.5em;
        font-family: 'Open Sans';
    }

    .bottom-left{
        position: absolute;
        bottom: 2vw;
        left: 2vw;
    }

    .bottom-right{
        position: absolute;
        bottom: 2vw;
        right: 2vw;
    }

    .logo{
        width: 10%;
        position: absolute;
        left: 2%;
        top: 2%;
    }

    .view360{
        width: 4em;
        height: 4em;
        padding: 0.4em;
        margin: 0;
        touch-action: none;
    }

    .container360{
        border-style: solid solid solid solid;
        border-color: #328832;
        border-width: 0.3em;
        padding: 0;
        -webkit-border-radius: 3em 3em 3em 3em;
        -moz-border-radius: 3em 3em 3em 3em;
        border-radius: 3em 3em 3em 3em;
        background-color: #57c957;
        margin-bottom: 1em;
    }

    
    @media only screen and (max-width: 600px){
        
        .logo{
            width: 40%;
        position: absolute;
        left: 30%;
    }
}
@media only screen and (max-width: 800px){
    
    .bottom-left{
        position: absolute;
        bottom: 10vh;
        left: 2vw;
    }
    
    .bottom-right{
        position: absolute;
        bottom: 10vh;
        right: 2vw;
    }
    
}
@media only screen and (min-width: 800px){
    
    .zoom-in:hover{
        background-color: #e0e0e0;
    }
    .zoom-out:hover{
        background-color: #e0e0e0;
    }

    .view360:hover{
        background-color: #73df73;
    }
}

.view360:active{
        background-color: #358a35;
}

.zoom-in:active{
    background-color: #a0a0a0;
}
.zoom-out:active{
    background-color: #a0a0a0;
}

</style>