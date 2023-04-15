const elem = document.querySelector('input');
const displayOutput = document.getElementById('outputMessage');

const handleInput = () => {
	displayOutput.style.color = 'red';
	let outputMessage = '';
	let { value } = elem;
	if (value <= 0) outputMessage = 'Please enter a positive number';
	else {
		let reversedStr = value.split('').reverse().join('');
		if (value === reversedStr) {
			outputMessage = 'Yes. This is a palindrome!';
			displayOutput.style.color = 'green';
		} else outputMessage = 'No. Try again.';
	}
	displayOutput.innerHTML = outputMessage;
};

elem.addEventListener('input', handleInput);
