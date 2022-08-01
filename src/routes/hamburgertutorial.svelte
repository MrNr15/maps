
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

<header class="header">
    <button class="header__button" id="btnNav" type="button">
        <i class="material-symbols-outlined">menu</i>
    </button>
</header>

<nav class="nav"  class:nav--open="{nav_open === true}">
    <div class="nav__links">
        <a href="#" class="nav__link">
            <i class="material-symbols-outlined">dashboard</i>
            Dashboard
        </a>
        <a href="#" class="nav__link">
            <i class="material-symbols-outlined">dashboard</i>
            Dashboard
        </a>
        <a href="#" class="nav__link">
            <i class="material-symbols-outlined">dashboard</i>
            Dashboard
        </a>
        <a href="#" class="nav__link">
            <i class="material-symbols-outlined">dashboard</i>
            Dashboard
        </a>
    </div>
    <div class="nav__overlay"></div>
</nav>

<script>

    let nav_open = false

  import { onMount } from 'svelte';

  onMount(() => {
        const nav = document.querySelector(".nav");

        document.querySelector("#btnNav").addEventListener("click", ()=> {
            //nav.classList.add("nav--open")
            nav_open = true
        })

        document.querySelector(".nav__overlay").addEventListener("click", ()=> {
            //nav.classList.remove("nav--open")
            nav_open = false
        })
  })
</script>

<style>

    :global(body){
        --header-height: 50px;

        margin: var(--header-height) 0 0 0;
        font-family: sans-serif;
    }

    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--header-height);
        background-color: #333333;
        display: flex;
    }

    .header__button{
        width: var(--header-height);
        flex-shrink: 0;
        background: none;
        outline: none;
        border: none;
        color: #ffffff;
        cursor: pointer;
    }

    .nav__links{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        height: 100vh;
        width: 250px;
        background: white;
        transform: translateX(-250px);
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
        font-size: 14px;
        text-decoration: none;
        padding: 12px 15px;
        transition: background 200ms;
        transition: color 200ms;
    }
    
    .nav__link > i{
        margin-right: 15px;
    }
    
    .nav__link:hover{
        background: #eeeeee;
        color: aquamarine;
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
    }
    
    .nav--open .nav__overlay{
        visibility: visible;
        opacity: 1;
    }


</style>