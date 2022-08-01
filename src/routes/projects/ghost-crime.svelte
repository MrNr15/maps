
<script>
    import Header from '../header.svelte';
    import Footer from '../footer.svelte'
</script>

<Header></Header>

<div class="main">
    <div class="background">
    </div>
    <img class="image" src="../ghost-crime.png" alt="Screenshot of the game">
</div>
<div class="main-cover" id="main-cover"></div>

<div class="main-body">
        
        <div class="text">
            <h1>
                Atmospheric Minigame
            </h1>
                <div class="article">
                    This is a game that I made as an entry to the <a href="https://itch.io/jam/godot-wild-jam-43">Godot Wild Jam 43</a> in just one week using the Godot Game Engine.
                    You are a ghost who goes back to his house to collect things from his past. But because stealing from the real world is illegal by ghost law, other ghosts will try to stop you. 
                    This is a project where I not only programmed the hole game but I also made all of the graphics on my own to create a more cineamtic and atmospheric experience.
                </div>
            <a href="https://mrnr15.itch.io/ghost-crime">Play it yourself here</a>
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
        background: rgb(42, 23, 1);
    }

    .main-body{
        width: 70%;
        margin: auto;
        margin-top: 0;
        background-color: var(--white);
    }

    .image{
        z-index: -1;
        width: 100%;
    }
    
    .text{
        margin: 0;
        font-size: 2em;
        padding: 1em 15% 2em 15%;
        text-align: center;
    }
    
    @media only screen and (max-width: 1300px){

        .main-body{
            width: 100vw;
        }

        .main-cover{
        padding-top: 50%;
    }

    }

    @media only screen and (max-width: 1500px){

        .text{
            padding: 1em 5% 1em 5%;
            font-size: 1.75em;
        }

}

</style>