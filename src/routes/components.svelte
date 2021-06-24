<script>
    import Button from "$lib/components/elements/Button.svelte";
    import Clock from "$lib/components/elements/Clock.svelte";
</script>

<svelte:head>
    <title>Svelte - Components</title>
</svelte:head>

<div class="content">
    <p>Some components of this template :</p>

    <Clock/>

    <div class="buttons">
        <Button href="/" external={false} hoverStyle="void" style="margin-right: 10px;">Void Hover</Button>
        <Button href="https://svelte.dev/" external={true} hoverStyle="brightness" style="margin-right: 10px;">Brightness Hover</Button> 
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;

        .buttons {
            display: flex;

            * {
                margin: $space-1 $space-5;
            }
        }
    }
</style>