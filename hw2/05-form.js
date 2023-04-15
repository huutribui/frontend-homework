// Add your code here
const inputForm = document.getElementById('inputForm');
inputForm.addEventListener('submit', function (event) {
	event.preventDefault();
	let name = document.getElementById('fullname').value;
	let email = document.getElementById('email').value;
	let comment = document.getElementById('comment').value;
	let os = document.getElementById('os').checked;
	let pl = document.getElementById('pl').checked;
	let fs = document.getElementById('fs').checked;
	console.log(
		'============================Submit Details============================\n'
	);
	console.log('Name:', name);
	console.log('Email:', email);
	if (comment) console.log('Comment:', comment);
	if (os || pl || fs) {
		console.log('Course(s) taken: ');
		if (os) console.log('\t Operating System');
		if (pl) console.log('\t Programming Languages');
		if (fs) console.log('\t Full Stack Web Development');
	}
	console.log(
		'\n=============================================================='
	);
});
