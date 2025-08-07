const button = document.getElementById('main')
const body = document.querySelector('body')
const changeBackground = button.addEventListener(('click'), function(e){
    body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log("Background color changed to: " + body.style.backgroundColor);
}) 

console.log("new background")


