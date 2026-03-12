import { getSelecoes } from "../../services/selecoes.service.js";

	const render = async () => {

	const selecoes = await getSelecoes();

	return `
	<h1>Seleções</h1>

	<pre>
	${JSON.stringify(selecoes, null, 2)}
	</pre>

	`;

	};

	export { render };