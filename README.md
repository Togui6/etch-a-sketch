# etch-a-sketch






Individual square light up : 

const hover1 = document.querySelector(".square1");
hover1.onmouseover = function() {
    hover1.style.background = "blue";
};
hover1.onmouseout = function() {
    hover1.style.background = "white";
};

const hover2 = document.querySelector(".square2");
hover2.onmouseover = function() {
    hover2.style.background = "yellow";
};
hover2.onmouseout = function() {
    hover2.style.background = "white";
};

const hover3 = document.querySelector(".square3");
hover3.onmouseover = function() {
    hover3.style.background = "green";
};
hover3.onmouseout = function() {
    hover3.style.background = "white";
};

const hover4 = document.querySelector(".square4");
hover4.onmouseover = function() {
    hover4.style.background = "red";
};
hover4.onmouseout = function() {
    hover4.style.background = "white";
};