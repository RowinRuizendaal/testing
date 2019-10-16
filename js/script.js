
//slideshow
var map = 'img/' //map
var images = [map + '1.jpg', map + '2.jpg', map + '3.jpg']; //images
var section = document.querySelector('.banner img');
var interval = setInterval(slideshow, 2000);




function slideshow() {
    var random = images[Math.floor(Math.random() * images.length)];
    section.src = random;

}