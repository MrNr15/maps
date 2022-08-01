
<script>
    let games = [{
        name: "Solar Sim",
        image: "https://img.itch.zone/aW1nLzc4MDIyNTUucG5n/315x250%23c/PHwg74.png",
        url: "./projects/solar-sim",
        color: "green"
    },{
        name: "Dungeon Quest",
        image: "https://img.itch.zone/aW1nLzc2NDkwODIucG5n/315x250%23c/PGAZQq.png",
        url: "./projects/dungeon-quest",
        color: "blue"
    },{
        name: "Ghost Crime",
        image: "https://img.itch.zone/aW1nLzg0NjI0NjEucG5n/315x250%23c/56gksr.png",
        url: "./projects/ghost-crime",
        color: "orange"
    }]

    import Gamecart from './gamecart.svelte';
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import Gameoflife from './fototest.svelte';

</script>

<meta name="viewport" content="width=device-width, inital-scale=1">

<Header></Header>

<Gameoflife></Gameoflife>

<div class="main-cover" id="main-cover">
    <div class="title-box">
    </div>
    <h2>
        I make games and some other stuff
    </h2>
</div>

<div class="main-body">
    
    <div class="projects" id="projects">
        <h1>My Work</h1>
        <div class="grid">
            {#each games as game}
            <Gamecart {game} />
            {/each}
        </div>
    </div>
    
    <div class="about" id="about">
        <h1>About Me</h1>
        I am a student from germany who loves games and has set their mind on making their own.
        I have been making games in my free time since 2018 mainly using the Godot Game Engine and started releasing games in 2021. I not only have experience in programming but also in game design and graphic design.
        I have also made websites (like this one) using HTML, CSS and Javascript. Besides that I have also tried out Game Maker Studio, Java and Phython as well.
    </div>

    <div class="contact" id="contact">
        <h1>Contact</h1>
        <br>
        Email: <a href="mailto:2604meik@gmail.com">2604meik@gmail.com</a>
        <br>
        Discord: Mr.Nr.15#0133
        <br>
        Twitter: <a href="https://twitter.com/Mr_Nr_15">@Mr_Nr_15</a>
    </div>

</div>
    
<Footer></Footer>

<style>

    *{
        font-family: "ubuntu";
    }

    :root{
        --main-color: #2D4CF0;
        --white: #f2f2f2;
        --grey: #bfbfbf;
        --black: #222222;
        --black2: #0d0d0d;
        --orange: #f27127;
        --blue: #777df2;
        --green: #3be0bf;

        margin: 0;
    }

    :global(body){
        margin: 0;
    }
    
    .main-cover{
        position: relative;
        width: 100%;
        height: 100vh;
        color: var(--white);
        text-align: center;
        display: flex;
    }
    
    .main-body{
        width: 70%;
        margin: auto;
        background: var(--white);

        border-top-left-radius: 5em;
        border-top-right-radius: 5em;
    }

    .projects{
        padding-top: 3em;
        padding-bottom: 3em;
    }

    .projects > h1{
        font-size: 4em;
    }
    
    .grid{
        margin:  0 auto;
        display: grid;
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
        justify-content: center;
        
    }
    
    .about{
        font-size: 2em;
        padding: 1em 15% 2em 15%;
        text-align: center;
    }

    .contact{
        font-size: 1.5em;
        padding: 1em 15% 2em 15%;
        text-align: center;
    }

    .contact > h1{
        margin-bottom: 0;
        font-size: 3em;
    }
    
    h1{
        font-size: 2em;
        font-family: "ubuntu";
        text-align: center;
        color: var(--black);
    }

    .title-box{
        display: flex;
        align-self: center;
        width: 75vw;
        height: 75vh;
        margin: 12.5%;
        overflow-x: hidden;

        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,1) 5%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 45%);
        transform: scale(2,0.75);
        
    }

    h2{
        position: absolute;
        display: flex;
        margin: 0;
        color: var(--white);
        text-align: center;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        font-size: 3em;
        z-index: 2;

        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */

    }
    
    @media only screen and (max-width: 860px){

        .about{
        font-size: 1.5em;
        padding: 1em 5% 2em 5%;
    }

    .contact{
        padding: 1em 5% 2em 5%;
    }

    .contact > h1{
        font-size: 2em;
    }

    .projects > h1{
        font-size: 3em;
    }

        .title-box{
        width: 100%;
        height: 100%;
        margin: 0;
        background: radial-gradient(circle, rgba(0,0,0,1) 5%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0) 70%);
        transform: scaleY(0.75)
        }

        h2{
            width: 80vw;
            padding-left: 10vw;
            font-size: 2em;
        }

    }

    @media only screen and (max-width: 1100px){

        .main-body{
            width: 100%;
        }

    }

    :global(html){
        scroll-behavior: smooth;
        max-width: 100%;
        overflow-x: hidden;
    }

</style>