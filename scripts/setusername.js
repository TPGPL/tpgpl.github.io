var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

if (!localStorage.getItem('name')||localStorage.getItem('name') === null) setUsername();
else{
    var storedNickname = localStorage.getItem('name');
    myHeading.textContent = 'siema, ' + storedNickname;
}

myButton.onclick = function(){
    setUsername();
}

function setUsername()
{
    var Nick = prompt('siema podaj swój nick');
    localStorage.setItem('name', Nick);

    myHeading.textContent = 'siema, ' + Nick;
}

