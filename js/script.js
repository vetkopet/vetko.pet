document.querySelector(".div-menu").addEventListener("click",animarMenu);
document.querySelector(".div")



var contenedor__nav= document.querySelector(".contenedor-nav");
var menu= document.querySelector(".menu");
var body = document.querySelector("body");
var header= document.querySelector("header");


function animarMenu(){
    contenedor__nav.classList.toggle("contenedor-nav--activado");
    menu.classList.toggle("menu--activado");
    body.classList.toggle("no-scroll");
    header.classList.toggle("hold");
    };