<script>
    import Button from "$lib/components/elements/Button.svelte";
    import Clock from "$lib/components/elements/Clock.svelte";
</script>

<svelte:head>
    <title>Svelte - Home</title>
</svelte:head>

<div class="svelte">
    <p>Documentation Svelte :</p>

    <div class="buttons">
        <Button href="https://svelte.dev/" external={true} hoverStyle="brightness" style="margin-right: 10px;">Svelte</Button>
        <Button href="https://kit.svelte.dev/" external={true} hoverStyle="brightness" style="margin-right: 10px;">Svelte Kit</Button>
    </div>
</div>

<style>
    .buttons {
        display: flex;
    }
</style>