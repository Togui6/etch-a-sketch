const container = document.querySelector("#container");

const square1 = document.createElement("div");
square1.classList.add("square");


const square2 = document.createElement("div");
square2.classList.add("square");

const square3 = document.createElement("div");
square3.classList.add("square");

const square4 = document.createElement("div");
square4.classList.add("square");


const square5 = document.createElement("div");
square5.classList.add("square");

const square6 = document.createElement("div");
square6.classList.add("square");

const square7 = document.createElement("div");
square7.classList.add("square");
const square8 = document.createElement("div");
square8.classList.add("square");


const square9 = document.createElement("div");
square9.classList.add("square");

const square10 = document.createElement("div");
square10.classList.add("square");

const square11 = document.createElement("div");
square11.classList.add("square");

const square12 = document.createElement("div");
square12.classList.add("square");


const square13 = document.createElement("div");
square13.classList.add("square");

const square14 = document.createElement("div");
square14.classList.add("square");

const square15 = document.createElement("div");
square15.classList.add("square");

const square16 = document.createElement("div");
square16.classList.add("square");


container.appendChild(square1);
container.appendChild(square2);
container.appendChild(square3);
container.appendChild(square4);

container.appendChild(square5);
container.appendChild(square6);
container.appendChild(square7);
container.appendChild(square8);

container.appendChild(square9);
container.appendChild(square10);
container.appendChild(square11);
container.appendChild(square12);

container.appendChild(square13);
container.appendChild(square14);
container.appendChild(square15);
container.appendChild(square16);







const allDivs = document.querySelectorAll(".square");
allDivs.forEach(carre => {
    carre.addEventListener('mouseover', () => {
carre.style.background = "red";
});

carre.addEventListener('mouseout', () => {
carre.style.background = "white";
});
});
