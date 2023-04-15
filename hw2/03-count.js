// Add your code here
const originalText = document.getElementById('text').innerHTML;

const handleKeyDown = (event) => {
	document.getElementById('text').innerHTML = originalText;
	const searchKey = document.getElementById('searchKey').value;
	console.log('EVENT: ', searchKey);
	const words = originalText.split(' ');
	for (let i = 0; i < words.length; i++) {
		if (words[i] === event.target.value)
			words[i] = `<span style="background-color: yellow">${searchKey}</span>`;
	}
	console.log(words);
	document.getElementById('text').innerHTML = words.join(' ');
};

const input = document.querySelector('input');

input.addEventListener('keyup', handleKeyDown);
