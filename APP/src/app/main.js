import { getSelecoes } from "../services/selecoes.service.js";
	import { Navbar } from "../components/navbar/index.js";
	import { Footer } from "../components/footer/index.js";

	import { routesAPP } from "../config/routes.js";

	const app = document.getElementById("app");
	const navbar = document.getElementById("navbar");
	const footer = document.getElementById("footer");

	navbar.innerHTML = Navbar();
	footer.innerHTML = Footer();

	const loadPage = async () => {

		let hash = window.location.hash.replace("#", "");

		if (hash === "") {
			hash = "/";
		}

		const page = routesAPP[hash];

		if (!page) {
			app.innerHTML = "<h1>Página não encontrada</h1>";
			return;
		}

		const module = await import(`../pages/${page}/index.js`);

		app.innerHTML = await module.render();

	};

	window.addEventListener("hashchange", loadPage);
	window.addEventListener("load", loadPage);

	const selecoes = await getSelecoes();
	console.log("Selecoes", selecoes);