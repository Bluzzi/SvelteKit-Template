<script context="module">
	export function load({error, status}){
		return {
			props: {
                errorCode: status,
				message: error.message.toLowerCase()
			}
		};
	}
</script>

<script>
	export let errorCode;
    export let message;
</script>

<div class="error">
	<p>Error {errorCode}</p>
	<p>{message}</p>
</div>

<style>
	.error {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		p {
			margin: 5px;

			font-size: $font-size-p;
		}
	}
</style>