
//slideshow
var images = ['img/1.jpg', 'img/2.jpg','img/3.jpg', 'img/4.jpg', 'img/5.jpg']; //images
var section = document.querySelector('.banner img'); //query selector
var interval = setInterval(slideshow, 3000); //interval
//End of slideshow


//Function slideshow
function slideshow() {
    var random = images[Math.floor(Math.random() * images.length)]; //pak random
    section.src = random; //zet src in variable random

}
//End function slideshow

//Funtion scroll into view when pressed on button
function intoview() {
    document.getElementsByClassName('aanbevolen')[0].scrollIntoView();
}
//End function Intoview

//Button animations
function buttonanimationOn() {
    document.querySelector('.banner button').classList.add('heartbeat');
   }
   
   function buttonanimationOff() {
    document.querySelector('.banner button').classList.remove('heartbeat');
   }

//End Button animations



//Event listeners
document.querySelector('.banner button').addEventListener('click', intoview) //Event listener scroll into view
document.querySelector('.banner button').addEventListener('mouseover',buttonanimationOn); //Event listener click
document.querySelector('.banner button').addEventListener('mouseout',buttonanimationOff); //Event listener click
