var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySource = myImage.getAttribute('src');

    if (mySource === 'images/one.png') myImage.setAttribute('src','images/two.png');
    else myImage.setAttribute('src','images/one.png');
}