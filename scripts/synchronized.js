"use strict";

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter),
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

var frequency = 1e3, elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;

var sequence = ["0111111", "0000011", "1101101", "1100111", "1010011", "1110110", "1111110", "0100011", "1111111", "1110011"];

window.onload = function() {
    stepSequence();
};
