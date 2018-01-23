var myImage = document.querySelector('img');

myImage.onclick = function(){
	var myScr = myImage.getAttribute('src');
	if (myScr === 'images/my-image.png') {
		myImage.setAttribute ('src', 'images/my-image2.png');
	} else {
		myImage.setAttribute ('src','images/my-image.png');
	}
}