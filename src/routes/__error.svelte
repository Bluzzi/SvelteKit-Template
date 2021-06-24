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

<p>{errorCode}</p>
<p>{message}</p>