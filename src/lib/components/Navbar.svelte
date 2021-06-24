<script>
    import { onMount } from "svelte";

    // Pages :
    const navItems = [
        {name: "Home", route: "/"},
        {name: "Components", route: "/components"}
    ];

    // Get the current active page (for the first call) :
    let currentPage = "";

    onMount(() => {
        currentPage = location.pathname;
    });

    // Function for update active page :
    function changeActive(event: MouseEvent){
        const element = <HTMLLinkElement>event.target;

        element.parentNode.childNodes.forEach(child => {
            (child as HTMLLinkElement).classList.remove("active");
        });

        element.classList.add("active");
    }
</script>

<nav>
    <img src="/img/favicon.png" alt="logo">

    <div class="links">
        {#each navItems as item}
            <a href={item.route} class={currentPage === item.route ? "active" : ""} on:click={event => changeActive(event)}>{item.name}</a>    
        {/each}
    </div>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 5%;

        height: 60px;

        background-color: $color-gray;

        img {
            height: 80%;
            width: auto;
        }

        a {
            font-size: 1.3em;
            text-decoration: none;
            color: black;
            
            margin-left: 15px;

            &:hover, &.active {
                border-bottom: solid 4px $color-primary;
            }
        }
    }
</style>