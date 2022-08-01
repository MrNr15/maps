
<script>
    import Header from '../header.svelte';
    import Footer from '../footer.svelte';

</script>

<Header></Header>

<div class="main">
    <div class="background">
    </div>
    <img class="image" src="../Solar-Sim.png" alt="Screenshot of the game">
</div>
<div class="main-cover" id="main-cover">
</div>

    <div class="main-body">
        
        <div class="text">
            <h1>
                Realistic orbital simulation
            </h1>
            <div class="box">
                <div class="article">
                    This simulation of planets uses a real physics equation to calculate their trajectory in real time. This allows me to experiment with more chaotic ways planets and moons can form a system then our real solar system.
                    The figure 8 orbit you can see at the top for example will propably never show up in real life. It is however technically possible for such an orbit to be stable as the simulation shows.
                    The simulation is not only capable of simulating the trajectorys of plantes but also to predict a path an object would take in that system.
                    I made this simulation in 2021 using the <a href="https://godotengine.org/">Godot Game Engine</a> because I got interested in orbits and wanted to understand how they work and experiment with them myself to see how they behave.
                </div>
                <img class="equation" src="../Equation.png" alt="Gravity Equation">
            </div>
            <a href="https://mrnr15.itch.io/solar-sim" class="link">Play it yourself here</a>
        </div>
        
        
    </div>    

<Footer></Footer>

<style>

    *{
        font-family: "ubuntu";
    }

    .article{
        padding-bottom: 1.5em;
    }

    :root{
        --main-color: #2D4CF0;
        --white: #f2f2f2;
        --grey: #bfbfbf;
        --black: #0d0d0d;
        --orange: #f27127;
        --blue: #777df2;
        --green: #3be0bf;
    }

    div{
        margin: 0em;
    }

    .main-cover{
        width: 100%;
        height: 0em;
        padding-bottom: 40%;
        opacity: 0;
    }

    .main{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        min-width: 100vw;
        color: var(--white);
        text-align: center;
    }

    .background{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background: rgb(12, 12, 12);
    }

    .main-body{
        width: 70%;
        margin: auto;
        margin-top: 0;
        background-color: var(--white);
    }

    .image{
        z-index: -1;
        width: 100vw;
    }
    
    .text{
        margin: 0;
        font-size: 2em;
        padding: 1em 7% 2em 7%;
        text-align: center;
    }

    
    .equation{
        display: block;
        width: 10em;
        height: auto;
    }
    
    .box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2em;
    }
    
    .link{
        width: 100%;
        margin: auto;
    }

    .article{
        padding-right: 2em;
    }
    
    @media only screen and (max-width: 1300px){
        
        .main-body{
            width: 100vw;
        }

        .main-cover{
        padding-bottom: 50%;
        }
        
    }

    @media only screen and (max-width: 1500px){

        .box{
            display: contents;
        }
        .article{
            padding: 0;
        }

        .equation{
            padding: 2em 0 2em 0;
            margin: auto;
        }

        .text{
            padding: 1em 5% 1em 5%;
            font-size: 1.75em;
        }

}

</style>