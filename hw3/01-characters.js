// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';


let app = document.querySelector('#results');
const loadingImg = document.getElementById('loading');
const render = document.createElement('div');
render.classList.add(
	'container',
	'd-flex',
	'flex-wrap',
	'justify-content-center'
);
app.appendChild(render);
const fetchData = async (url) => {
	// Add your code here
	try {
		const response = await fetch(url);
        console.log("RESPONSE", response)
		const data = await response.json();
        
		data.forEach((character) => {
			const figure = document.createElement('figure');
			figure.classList.add('figure');

			const img = new Image(250, 300);
			img.src = character.imageUrl;
			img.alt = character.title;
			figure.appendChild(img);

			const figcaption = document.createElement('figcaption');
			figcaption.textContent = character.fullName;
            const title = document.createElement('p');
            title.textContent = character.title;
            title.classList.add('title');
			figure.appendChild(figcaption);
            figure.appendChild(title);
			render.appendChild(figure);
		});
	} catch (err) {
		console.log(err);
		const error = document.createElement('p');
		error.textContent = 'An error occured. Please try again.';
		render.append(error);
	} finally {
		loadingImg.remove();
	}
};

fetchData(url);
