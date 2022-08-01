
<script>
    import Header from '../header.svelte';
    import Footer from '../footer.svelte';
</script>

<Header></Header>

<div class="main">
    <div class="background">
    </div>
    <img class="image" src="../dungeon-quest.png" alt="Screenshot of the game">
</div>
<div class="main-cover" id="main-cover"></div>

<div class="main-body">
        
        <div class="text">
            <h1>
                Game and Website
            </h1>
                <div class="article">
                    In this little game you play as a knight who is tasked to save the kingdoms princess. I made the game in Phaser 3 Javascript as a part of a 2 week intership project at 
                    <a href="https://www.webmen.de/">Webmen</a> in 2022 where I learned Javascript as well as html/css.
                    Together with this game I made a website from scratch to encapsulate it. The game is a simple 2D platformer in which you must kill all enemys to go to the next of 6 levels. You can also find 5 secret chests across the game.
                    The website is one page which has the game as well as some information on the game and screenshots.
                </div>
            <a href="https://dungeonquest-mrnr15.netlify.app/">Check it out here</a>
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
        background: rgb(42, 23, 42);
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
        padding-bottom: 50%;
        height: var(--header-height);
        }

        .main{
            top: var(--header-height);
        }

    }

    @media only screen and (max-width: 1500px){

        .text{
            padding: 1em 5% 1em 5%;
            font-size: 1.5em;
        }

        h1{
            font-size: 1.75em;
        }

}

</style>