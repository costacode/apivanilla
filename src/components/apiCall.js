export default function() {
	// create a request variable and assign a new XMLHttpRequest object to it.
	const request = new XMLHttpRequest();

	// Open a new connection, using the GET request on the URL endpoint
	request.open(
		"GET",
		// "https://ghibliapi.herokuapp.com/films",
		"http://api.tvmaze.com/shows",
		true
	);

	request.onload = function() {
		// Begin accessing JSON data here
		var data = JSON.parse(this.responseText);

		if (request.status >= 200 && request.status < 400) {
			data.forEach(show => {
				// console.log(movie.title);
				// console.log("movie description: " + movie.description);
				// create a div with a card class
				const card = document.createElement("div");
				card.setAttribute("class", "card");

				// Create an h1 and set the text content to the film's title
				const title = document.createElement("h1");
				title.textContent = show.name;

				// Create a p and set the text content to the film's description
				const description = document.createElement("p");

				// Limit chars
				// show.summary = show.summary.substring(0, 300);
				// description.textContent = `${show.summary}...`;

				// all chars
				description.textContent = show.summary.replace(
					/<\/?[^>]+>/gi,
					""
				);

				// image
				const imageShow = document.createElement("img");
				imageShow.src = show.image.medium;

				const infoShow = document.createElement("div");
				infoShow.setAttribute("class", "info-show");

				// Append the cards to the container element
				const container = document.querySelector(".container");
				container.appendChild(card);
				card.appendChild(imageShow);
				card.appendChild(infoShow);
				infoShow.appendChild(title);
				infoShow.appendChild(description);
			});
			const loader = document.querySelector(".loader");
			loader.classList.add("hide");
		} else {
			// console.log("error");
			const errorMessage = document.createElement("div");
			errorMessage.setAttribute("class", "error");
			errorMessage.textContent = "Nope, it's not working";
			container.appendChild(errorMessage);
		}
	};

	// Send request
	request.send();
}
