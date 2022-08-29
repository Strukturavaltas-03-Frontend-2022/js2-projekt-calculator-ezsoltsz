"use strict";

const result = document.querySelector(".result");
const numberBtn = document.querySelectorAll(".number__btn");
const btnTop = document.querySelectorAll("btn__top");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let calculating = 0;

numberBtn.forEach((number, n) =>
    number.addEventListener("click", () => {
        result.innerHTML += number.innerHTML;
        btnTop.forEach((mark) => mark.removeAttribute("disabled"));
    })
);

btnTop.forEach((mark, n) => {
    mark.setAttribute("disabled", true);
    mark.addEventListener("click", () => {
        result.innerHTML += ` ${mark.innerHTML} `;
        btnTop.forEach((mark) => mark.setAttribute("disabled", false));

    });
});

clear.addEventListener("click", () => {
    result.innerHTML = "";
});

dot.addEventListener("click", () => {
    result.innerHTML += dot.innerHTML;
});

equal.addEventListener("click", count);

