var myOutput = document.querySelector('h3');
var myButton = document.querySelector('button');

myButton.onclick = function() {
    gradeSelector();
 }

function gradeSelector()
 {
    var myGrade = prompt('siema jaką ocenkę dziś dostałeś');
    localStorage.setItem('grade', myGrade);

    if(myGrade === '1'||myGrade === '2'||myGrade === '3') myOutput.textContent = 'ale sztynks';
    else if(myGrade === '4') myOutput.textContent = 'meh';
    else if(myGrade === '5'||myGrade === '6') myOutput.textContent = 'cossac';
    else myOutput.textContent = 'we nie klam';
 }