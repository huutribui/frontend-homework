// Add your code here
const button = document.getElementById('button');
const body = document.getElementById('body');
let interval = 0;

const startColorChange = (timer) => {
	console.log('TIME: ', timer);
	interval = setInterval(changeBackgroundColor, timer * 1000);
	button.textContent = 'Stop';
	button.className = 'btn btn-danger mt-3';
};

function changeBackgroundColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let a = Math.random() * 0.5 + 0.5;
	let color = `rgba(${r},${g},${b},${a})`;
	body.style.backgroundColor = color;
}

const stopColorChange = () => {
	clearInterval(interval);
	button.textContent = 'Start';
	button.className = 'btn btn-primary mt-3';
};

button.addEventListener('click', function () {
	const timer = document.getElementById('timer').value;
	if (button.textContent === 'Start') {
		startColorChange(timer);
	} else {
		stopColorChange();
	}
});
