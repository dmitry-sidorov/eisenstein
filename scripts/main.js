var myImage = document.querySelector('img');

myImage.onclick = function(){
	var myScr = myImage.getAttribute('src');
	if (myScr === 'images/my-image.png') {
		myImage.setAttribute ('src', 'images/my-image2.png');
	} else {
		myImage.setAttribute ('src','images/my-image.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt ('Please enter your name.');
	localStorage.setItem ('name',myName);
	myHeading.textContent = 'Github is cool, '+ myName + '!';
}

if (!localStorage.getItem('name')) {
	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Github is cool, '+ storedName + '!';
}

myButton.onclick = function (){
	setUserName();
}