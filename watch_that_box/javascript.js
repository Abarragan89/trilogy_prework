"use strict";

document.getElementById("button1").addEventListener('click', grow);
document.getElementById("button2").addEventListener('click', blue);
document.getElementById("button3").addEventListener('click', fade);
document.getElementById("button4").addEventListener('click', reset);
document.getElementById("button5").addEventListener('click', move);

function grow() {
    document.getElementById("box").style.height = "225px";
}

function blue() {
    document.getElementById("box").style.backgroundColor = "blue";
}

function fade() {
    document.getElementById("box").style.opacity = "0.5";
}

function reset() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.margin = "25px";
}

function move() {
    document.getElementById('box').style.margin = "150px";
}