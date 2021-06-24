<script>
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar/>

<div id="main">
    <slot></slot>
</div>

<footer>
    <p>Svelte template</p>
</footer>

<style>
    #main {
        padding: 30px 25vw;

        @media (max-width: $responsive-bp-tablet){
            padding: 30px $space-4;
        }
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: $color-gray;
    }
</style>