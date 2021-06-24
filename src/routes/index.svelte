<script>
    import Button from "$lib/components/elements/Button.svelte";
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

    <p>Information on the content of this template :</p>
    <ul>
        <li>Much of this template serves as an example of organization and possibilities</li>
        <li>To change the default font, go to /static/style/font.css</li>
        <li>&#60;script&#62; tags in Svelte files use TypeScript by default</li>
        <li>&#60;style&#62; tags in Svelte files use SCSS by default</li>
        <li>There are SCSS variables that can be used anywhere in the Svelte files. It is located in /lib/scss/variables.scss</li>
        <li>In the "Components" page (in the navbar) you can see some components available in this template</li>
    </ul>
</div>

<style>
    .buttons {
        display: flex;
    }
</style>