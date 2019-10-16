
//slideshow
var map = 'img/' //map
var images = [map + '1.jpg', map + '2.jpg', map + '3.jpg']; //images
var section = document.querySelector('.banner img'); //query selector
var interval = setInterval(slideshow, 2000); //interval




function slideshow() {
    var random = images[Math.floor(Math.random() * images.length)]; //pak random
    section.src = random; //zet src in variable random

}