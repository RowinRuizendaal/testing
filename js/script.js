
//slideshow
var images = ['img/1.jpg', 'img/2.jpg','img/3.jpg']; //images
var section = document.querySelector('.banner img'); //query selector
var interval = setInterval(slideshow, 2000); //interval




function slideshow() {
    var random = images[Math.floor(Math.random() * images.length)]; //pak random
    section.src = random; //zet src in variable random

}