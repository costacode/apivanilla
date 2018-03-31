export default function() {
	// create and append logo
	const app = document.getElementById("root");

	const logo = document.createElement("img");
	logo.src = "img/logo.png";

	const logoWrap = document.createElement("div");
	logoWrap.setAttribute("class", "logo-wrap");
	logoWrap.appendChild(logo);

	const header = document.createElement("header");
	header.setAttribute("class", "header");
	header.textContent =
		"An exercise on retrieving data from an API using vanilla JavaScript";

	const container = document.createElement("div");
	container.setAttribute("class", "container");

	app.appendChild(header);
	app.appendChild(container);
	container.appendChild(logoWrap);
}
