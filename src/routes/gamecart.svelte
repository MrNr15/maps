<script>
    export let game

    var color = game.color

</script>

<div class="gamecart" class:green="{color === "green"}" class:blue="{color === "blue"}">
    <a href={game.url}>
        <img src={game.image} alt="Game Cover">
        <p>{game.name}</p>
    </a>
</div>

<style>

    :root{
        --white: #f2f2f2;
        --grey: #bfbfbf;
        --black: #0d0d0d;
        --orange: #f27127;
        --blue: #777df2;
        --green: #3be0bf;

        --brightorange: #e6844c;
        --brightblue: #8d92ea;
        --brightgreen: #83dfcd;
    }

    div{
        background-color: var(--orange);
        width: fit-content;
        margin: 2em;
        border-radius: 3em;
        transition: background-color,transform 250ms;
        transition: transform 250ms;
        transform: scale(1,1);
    }

    div:hover{
        background-color: #e6844c;
        transform: scale(1.1,1.1);
    }

    div:active{
        transform: scale(0.95,0.95);
    }

    .green{
        background-color: var(--green);
    }

    .blue{
        background-color: var(--blue);
    }
    .green:hover{
        background-color: var(--brightgreen);
    }

    .blue:hover{
        background-color: var(--brightblue);
    }

    img{
        border-top-left-radius: 3em;
        border-top-right-radius: 3em;
    }

    a:link, a:visited {
        color: white;
        text-align: center;
        text-decoration: none;
    }

    p{
        text-align: center;
        font-size: 2em;
        margin: 0em;
        padding: 1em 0em 1em 0em;
        color: white;
        font-family: "ubuntu";
    }

    @media only screen and (max-width: 1040px){
        
        div{
        transform: scale(0.9,0.9);
        }

    div:hover{
        background-color: #e6844c;
        transform: scale(1,1);
    }

    div:active{
        transform: scale(0.85,0.85);
    }

    }

</style>