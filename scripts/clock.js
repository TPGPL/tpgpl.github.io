var myButton = document.querySelector('button');
var myClock = document.querySelector('p');



myButton.onclick = function() {
    updateClock();
}


function updateClock()
{
    var myDate = new Date();
    myClock.textContent = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}