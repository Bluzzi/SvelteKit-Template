<nav>
    <img src="/favicon.png" alt="logo">

    <div class="links">
        <a href=".">Home</a>
        <a href="components">Components</a>
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

            &:hover {
                border-bottom: solid 4px $color-primary;
            }
        }
    }
</style>