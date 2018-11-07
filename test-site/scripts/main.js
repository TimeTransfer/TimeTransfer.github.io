var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/programmer-2.jpg') {
      myImage.setAttribute('src', 'images/github.jpg');
    } else {
      myImage.setAttribute('src', 'images/programmer-2.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I\'m a progarmmer! ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'I\'m a progarmmer! ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}