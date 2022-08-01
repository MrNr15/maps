<script>

     let user = {
         name: "",
         password: "",
         count: 0
     }

     let id = 0;

    let users = [["Meik", "12345", 0],["Meik2", "54321", 0]]

    function increment_count(){
        user.count += 1
        users[id][2] = user.count
    }

    function get_user(username){
        id = 0
        for (let i = 0;i < users.length;i++){
            if (username == users[i][0]){
                id = i;
                break
            }
        }
        user.name = users[id][0]
        user.password = users[id][1]
        user.count = users[id][2]
    }

    let loggedIn = false

	function login() {
        get_user(document.getElementById("username").value)

        if (document.getElementById("password").value == user.password){
            loggedIn = true;
        }
        document.getElementById("password").value = ""
	}
    function logout(){
        loggedIn = false
    }

    let password_type = "password"

    function toggle_show_password(){
        if (password_type != "password"){
            password_type = "password"
        }else{
            password_type = "text"
        }
        
    }

</script>

<h1>This is a paragraph.</h1>

<style>

    @tailwind base;
    @tailwind components;
    @taiwind utilities;

    h1 {
        color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

    .clickme{
        font-size: 2em;
    }

</style>


<input  id="username" name="username" placeholder="Username">
<input type={password_type} id="password" name="pwd" placeholder="Password">
<label>Show password</label>
<input type="checkbox" on:click={toggle_show_password}>


{#if loggedIn}
<button on:click={logout}>
    Log out
</button>
{/if}

{#if !loggedIn}
<button on:click={login}>
    Log in
</button>
{/if}

{#if loggedIn}
<div>

    <button on:click={increment_count} class="clickme">
        Click me!!!
    </button>
    <p>{user.count}</p>
</div>
{/if}

<a href="sign_in">Sign in</a>
