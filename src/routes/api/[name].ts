import type { EndpointOutput } from "@sveltejs/kit";

export async function get({params}) : Promise<EndpointOutput> {
	return {
		body: params.name
	};
}