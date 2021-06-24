<nav>
    <img src="/favicon.png" alt="logo">

    <div class="links">
        <a href=".">Home</a>
        <a href="components">Components</a>
    </div>
</nav>

<div id="main">
    <slot></slot>
</div>

<footer>
    <p>Svelte template</p>
</footer>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 5%;

        height: 60px;

        background-color: rgba(235, 235, 235, 0.555);

        img {
            height: 80%;
            width: auto;
        }

        a {
            font-size: 1.3em;
            text-decoration: none;
            color: black;
            
            margin-left: 15px;

            &:hover {
                border-bottom: solid 4px $color-primary;
            }
        }
    }

    #main {
        padding: 30px 25vw;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(235, 235, 235, 0.555);
    }
</style>