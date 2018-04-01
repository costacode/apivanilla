export default function hero() {
	// create and append logo
	const app = document.getElementById("root");

	const logo = document.createElement("img");
	logo.src = "img/tvm_api.png";

	const intro = document.createElement("p");
	intro.setAttribute("class", "intro");
	intro.textContent =
		"Simple web app that connects the TVMaze API, retrieves the data with JavaScript, and displays it on the front end.";

	const logoWrap = document.createElement("div");
	logoWrap.setAttribute("class", "logo-wrap");

	// logoWrap.appendChild(logo);
	// logoWrap.appendChild(intro);

	const header = document.createElement("header");
	header.setAttribute("class", "header");
	// header.textContent =
	// 	"An exercise on retrieving data from an API using vanilla JavaScript";

	const container = document.createElement("div");
	container.setAttribute("class", "container");

	// app.appendChild(header);
	header.appendChild(logo);
	header.appendChild(intro);

	app.appendChild(header);
	app.appendChild(container);
}
