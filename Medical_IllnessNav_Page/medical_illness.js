document.getElementById('scrollToA').addEventListener('click', function () {
    scrollToSection('A');
});

document.getElementById('scrollToB').addEventListener('click', function () {
    scrollToSection('B');
});

document.getElementById('scrollToC').addEventListener('click', function () {
    scrollToSection('C');
});

document.getElementById('scrollToD').addEventListener('click', function () {
    scrollToSection('D');
});

document.getElementById('scrollToE').addEventListener('click', function () {
    scrollToSection('E');
});

document.getElementById('scrollToF').addEventListener('click', function () {
    scrollToSection('F');
});

document.getElementById('scrollToG').addEventListener('click', function () {
    scrollToSection('G');
});

document.getElementById('scrollToH').addEventListener('click', function () {
    scrollToSection('H');
});

document.getElementById('scrollToI').addEventListener('click', function () {
    scrollToSection('I');
});

document.getElementById('scrollToJ').addEventListener('click', function () {
    scrollToSection('J');
});

document.getElementById('scrollToK').addEventListener('click', function () {
    scrollToSection('K');
});

document.getElementById('scrollToL').addEventListener('click', function () {
    scrollToSection('L');
});

document.getElementById('scrollToM').addEventListener('click', function () {
    scrollToSection('M');
});

document.getElementById('scrollToN').addEventListener('click', function () {
    scrollToSection('N');
});

document.getElementById('scrollToO').addEventListener('click', function () {
    scrollToSection('O');
});

document.getElementById('scrollToP').addEventListener('click', function () {
    scrollToSection('P');
});

document.getElementById('scrollToQ').addEventListener('click', function () {
    scrollToSection('Q');
});

document.getElementById('scrollToR').addEventListener('click', function () {
    scrollToSection('R');
});

document.getElementById('scrollToS').addEventListener('click', function () {
    scrollToSection('S');
});

document.getElementById('scrollToT').addEventListener('click', function () {
    scrollToSection('T');
});

document.getElementById('scrollToU').addEventListener('click', function () {
    scrollToSection('U');
});

document.getElementById('scrollToV').addEventListener('click', function () {
    scrollToSection('V');
});

document.getElementById('scrollToW').addEventListener('click', function () {
    scrollToSection('W');
});

document.getElementById('scrollToX').addEventListener('click', function () {
    scrollToSection('X');
});

document.getElementById('scrollToY').addEventListener('click', function () {
    scrollToSection('Y');
});

document.getElementById('scrollToZ').addEventListener('click', function () {
    scrollToSection('Z');
});

function scrollToSection(letter) {
    const sectionId = letter.toUpperCase();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// load treatment or awareness page depending on click and load to that page in the other tab

// add here