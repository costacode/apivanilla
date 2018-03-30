// Use namespace to prevent pollution of the global namespace
var apifilms = apifilms || {};

// Define application root object.
apifilms.app = (function() {
	if (typeof document !== "undefined") {
		const app = document.getElementById("root");
		const logo = document.createElement("img");
		logo.src = "images/logo.png";

		const container = document.createElement("div");
		container.setAttribute("class", "container");

		app.appendChild(logo);
		app.appendChild(container);
	}

	// create a request variable and assign a new XMLHttpRequest object to it.
	//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	request = new XMLHttpRequest();

	// Open a new connection, using the GET request on the URL endpoint
	request.open(
		"GET",
		"https://ghibliapi.herokuapp.com/films",
		true
	);

	request.onload = function() {
		// Begin accessing JSON data here
		var data = JSON.parse(this.responseText);

		if (request.status >= 200 && request.status < 400) {
			data.forEach(movie => {
				console.log(movie.title);
				// console.log("movie description: " + movie.description);
			});
		} else {
			console.log("error");
		}
	};

	// Send request
	request.send();
})();
