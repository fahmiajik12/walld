let galleryMidjourney = document.querySelector("#midjourney .gallery");
let galleryDallE = document.querySelector("#dall-e .gallery");
let galleryWombo = document.querySelector("#wombo .gallery");

// loop gallery midjourney
for (let i=1;i<=4;i++) {
	let newElement = document.createElement('img');
	newElement.src = 'assets/image/mj-' + (i) +'.jpg';
	newElement.alt = 'mj-' + (i);
	newElement.style = 'width: 200px;height: 300px;object-fit: cover;object-position: center; margin: 10px auto;';
	galleryMidjourney.appendChild(newElement);
}

//loop gallery dall-e
for (let i=1;i<=4;i++) {
	let newElement = document.createElement('img');
	newElement.src = 'assets/image/dall-e-' + (i) +'.jpg';
	newElement.alt = 'dall-e-' + (i);
	newElement.style = 'width: 200px;height: 300px;object-fit: cover;object-position: center; margin: 10px auto;';
	galleryDallE.appendChild(newElement);
}

//loop gallery wombo
for (let i=1;i<=4;i++) {
	let newElement = document.createElement('img');
	newElement.src = 'assets/image/wombo-' + (i) +'.jpg';
	newElement.alt = 'wombo-' + (i);
	newElement.style = 'width: 200px;height: 300px;object-fit: cover;object-position: center; margin: 10px auto;';
	galleryWombo.appendChild(newElement);
}