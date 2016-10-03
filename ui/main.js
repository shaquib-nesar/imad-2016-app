console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById("main-text");
element.innerHTML = "Welcome";

//mov the image
var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight() {
     marginLeft = marginLeft + 50;
     img.style.marginLeft = marginLeft + "px";
}

//from here
var marginDown = 0;
function moveUp(){
    marginDown = marginDown - 50;
    img.style.marginDown = marginDown + "px";
}

//upto here
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    var interval2 = setInterval2(moveUp, 100);  //this line
};