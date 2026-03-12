import { baseUrl } from "./env.js";

	const routesAPI = {
		selecoes: `${baseUrl}/selecoes`
	};

	const routesAPP = {

		"/": "home",

		"/selecoes": "selecoes"

	};

	export { routesAPI, routesAPP };