

<script>
    let header_visible = false
    let nav_open = false
    let subpage = true

    import { onMount } from 'svelte';

    onMount(() => {

        check_header()

        function check_header(){
            var scroll = window.scrollY;
            var screen_height = window.innerHeight
            header_visible = false
            if (scroll/screen_height >= 0.1){
                header_visible = true
            }
        }

        window.addEventListener("scroll", function(){
            check_header()
        });


        document.querySelector("#btnNav").addEventListener("click", ()=> {
            //nav.classList.add("nav--open")
            nav_open = true
        })

        document.querySelector(".nav__overlay").addEventListener("click", ()=> {
            //nav.classList.remove("nav--open")
            nav_open = false
        })

        document.querySelector(".nav__link").addEventListener("click", ()=> {
            //nav.classList.remove("nav--open")
            nav_open = false
        })

    })

    function close_nav(){
        nav_open = false
    }

</script>

<div class="background">
<div class="header" id="header" class:header-visible="{header_visible === true}">

        <a class="title" href="/">Portfolio</a>
        <div class="header-right">
            <a class="header-link orange" href="/#projects">My Work</a>
            <a class="header-link blue" href="/#about">About Me</a>
            <a class="header-link green" href="/#contact">Contact</a>
        </div>
        <span class="material-symbols-outlined" id="btnNav">
            menu
        </span>
    </div>
</div>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

<nav class="nav"  class:nav--open="{nav_open === true}">
    <div class="nav__links">
        <a href="/" class="nav__link" on:click={close_nav}>
            Home
        </a>
        <a href="/#projects" class="nav__link" on:click={close_nav}>
            My Work
        </a>
        <a href="/projects/solar-sim" class="nav__link sublink" on:click={close_nav}>
            Solar Sim
        </a>
        <a href="/projects/dungeon-quest" class="nav__link sublink" on:click={close_nav}>
            Dungeon Quest
        </a>
        <a href="/projects/ghost-crime" class="nav__link sublink" on:click={close_nav}>
            Ghost Crime
        </a>
        <a href="/#about" class="nav__link" on:click={close_nav}>
            About Me
        </a>
        <a href="/#contact" class="nav__link" on:click={close_nav}>
            Contact
        </a>
    </div>
    <div class="nav__overlay"></div>
</nav>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');

    :global(body){
        margin: 0;
    }

    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
        font-size: 1em;
        transition: transform 150ms;

        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        padding: 0em 0.5em 0em 0.5em;
    }

    .material-symbols-outlined:hover{
        transform: scale(1.2,1.2);
    }

    .material-symbols-outlined:active{
        transform: scale(0.85,0.85);
    }

    :root{
        --main-color: #2D4CF0;
        --white: #f2f2f2;
        --grey: #bfbfbf;
        --black: #0d0d0d;
        --orange: #f27127;
        --blue: #777df2;
        --green: #3be0bf;

        --header-height: 56.35px;
    }

    div{
        margin: 0em;
    }

    .background{
        z-index: 3;
        position: fixed;
        width: 100vw;
        padding-top: 9.6px;
        padding-bottom: 9.6px;
        height: 56.35px;
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,1) 100%);
    }

    .header{
        width: 100vw;
        z-index: 3;
        position: fixed;
        top: 0px;
        margin: 0em;
        padding: 0em;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        color: var(--white);
        font-size: 3em;
        font-family: "ubuntu";
        display: flex;
        place-content: space-between;
        width: 100vw;
        
        background: none;
        transition: background 300ms;
    }

    .header-visible{
        background: var(--black);
    }

    .header-link{
        padding: 0em 0.5em 0em 0.5em;
        text-decoration: none;
        color: var(--white);
        transition: color 150ms;
    }

    .header-link:hover{
        color: var(--orange);
    }

    .title{
        padding: 0em 0.5em 0em 0.5em;
        text-decoration: none;
        color: var(--white);

        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .nav__links{
        position: fixed;
        top: 0;
        right: 0;
        z-index: 5;
        height: 100vh;
        width: 250px;
        background: white;
        transform: translateX(250px);
        transition: transform 300ms;
    }

    .nav--open .nav__links{
        transform: translateX(0);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    
    .nav__link{
        display: flex;
        align-items: center;
        color: #666666;
        font-weight: bold;
        font-size: 1.5em;
        text-decoration: none;
        padding: 12px 15px;
        transition: background 200ms;
        transition: color 200ms;
        font-family: "ubuntu";
    }

    .sublink{
        font-size: 1em;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 32px;
    }

    .orange:hover{
        color: var(--orange);
    }

    .blue:hover{
        color: var(--blue);
    }

    .green:hover{
        color: var(--green);
    }
    
    .nav__link:hover{
        background: #eeeeee;
        color: var(--orange);
    }

    .nav__link:active{
        background: #eeeeee;
        color: var(--orange);
    }
    
    .nav__overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background:rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        visibility: hidden;
        transition: opacity 300ms;
        opacity: 0;
        z-index: 4;
    }
    
    .nav--open .nav__overlay{
        visibility: visible;
        opacity: 1;
    }

    .header-right{
        padding-right: 0.3em;
    }

    @media only screen and (max-width: 1040px){
        
        .header-right{
            display: none;
            visibility: hidden;
        }

        .title{
            font-size: 0.75em;
        }

    }

    @media only screen and (min-width: 1040px){
        
        .material-symbols-outlined {
            display: none;
            visibility: hidden;
        }

    }


</style>

