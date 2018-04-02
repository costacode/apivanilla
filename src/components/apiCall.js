export default function() {
	// create a request variable and assign a new XMLHttpRequest object to it.
	const request = new XMLHttpRequest();

	// Open a new connection, using the GET request on the URL endpoint
	request.open(
		"GET",
		// "https://ghibliapi.herokuapp.com/films",
		"https://api.tvmaze.com/shows",
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

				// get image
				const imageWrap = document.createElement("figure");
				const imageShow = document.createElement("img");
				imageShow.src = show.image.medium;
				imageWrap.appendChild(imageShow);

				// Title
				const title = document.createElement("h1");
				title.textContent = show.name;

				// Description
				const description = document.createElement("p");
				// Limit chars and delete html tags
				show.summary = show.summary
					.substring(0, 280)
					.replace(/<\/?[^>]+>/gi, "");
				description.textContent = `${show.summary}...`;

				// all chars without html tags
				// description.textContent = show.summary.replace(
				// 	/<\/?[^>]+>/gi,
				// 	""
				// );

				// More link
				const showUrl = document.createElement("a");
				showUrl.href = show.url;
				showUrl.setAttribute("class", "more");
				showUrl.setAttribute("target", "_blank");
				showUrl.textContent = "More";

				// Genres
				const infoList = document.createElement("ul");
				for (let i = 0; i < show.genres.length; i++) {
					let item = show.genres[i];
					let li = document.createElement("li");
					li.appendChild(document.createTextNode(item + ","));
					infoList.appendChild(li);
				}

				// Premiered
				const premiered = document.createElement("p");
				premiered.setAttribute("class", "meta");
				const premieredData = document.createElement("span");
				premiered.textContent = "Premiered";
				premieredData.textContent = show.premiered;
				premiered.appendChild(premieredData);

				// Rating
				const rating = document.createElement("p");
				rating.setAttribute("class", "meta");
				const ratingData = document.createElement("span");
				rating.textContent = "Rating";
				ratingData.textContent = show.rating.average;
				rating.appendChild(ratingData);

				// info container
				const infoShow = document.createElement("div");
				infoShow.setAttribute("class", "info-show");

				// Append the cards to the container element
				const container = document.querySelector(".container");
				container.appendChild(card);

				// Append image and info to the card element
				card.appendChild(imageWrap);
				card.appendChild(infoShow);

				// Append title and description to the info element
				infoShow.appendChild(title);
				infoShow.appendChild(description);
				infoShow.appendChild(infoList);
				infoShow.appendChild(premiered);
				infoShow.appendChild(rating);
				description.appendChild(showUrl);
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
