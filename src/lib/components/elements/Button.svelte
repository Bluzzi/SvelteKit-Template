<script>
    type HoverStyle = "brightness" | "void";

    export let href: string = "";
    export let external: boolean = false;

    export let hoverStyle: HoverStyle;
</script>

<a href={href} target={external ? "_blank" : ""} class={hoverStyle}>
    <slot></slot>
</a>

<style>
    a {
        display: flex;
        align-items: center;
        justify-content: center;

        text-transform: uppercase;
        text-decoration: none;
        color: white;
        font-size: $font-size-p;

        width: max-content;

        border-radius: 5px;

        $paddingY: 12px;
        $paddingX: 20px;

        padding: $paddingY $paddingX;
        margin: $space-1 $space-5;

        background-color: $color-primary;

        box-shadow: 0 1px 3px rgba($color: #000000, $alpha: 0.1);

        &.brightness:hover {
            filter: brightness(1.1);
        }

        &.void:hover {
            $border-size: 2px;

            border: $border-size solid $color-primary;
            background-color: transparent;

            color: $color-primary;

            padding: ($paddingY - $border-size) ($paddingX - $border-size);
        }
    }
</style>