function dys() {
    // Sélectionne tous les éléments de la page
    let elements = document.getElementsByTagName('*');
    // Parcourt tous les éléments et applique un style
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontFamily = "Arial";
        elements[i].style.color = "#2E2E2E";
        elements[i].style.backgroundColor = "#FFFFCC"
        // Vérifie et modifie si la taille de police est inférieure à 14pt
        if (parseFloat(getComputedStyle(elements[i]).fontSize) < 14) {
            elements[i].style.fontSize = "14pt";
        } else {
            elements[i].style.fontSize = getComputedStyle(elements[i]).fontSize;
        }
        // Gère l'espacement des mots, lettres, lignes..
        elements[i].style.lineHeight = "2";
        elements[i].style.letterSpacing = "1pt";
        elements[i].style.wordSpacing = "2pt";
        elements[i].style.textAlign = "left";
        // Met en surbrillance les liens cliquables en bleu
        if (elements[i].tagName === "A" && elements[i].hasAttribute("href")) {
            elements[i].style.color = "blue";
        }
    }
}

setTimeout(() => {
    dys();
}, 1000);


function daltonism() {
    let elements = document.querySelectorAll("*");
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i], elements[i].tagName);
        if (elements[i].tagName === "IMG") {
            elements[i].style = "filter: grayscale(100%);";
        }
        else {
            elements[i].style.color = "#cdcd0d";
        }
    }
}

/* setTimeout(() => {
    daltonism()
}, 1000); */

function unlovedLetters() {
    // Sélectionne tous les éléments de la page
    let paragraphs = document.querySelectorAll("p");
    // Parcourt tous les éléments et ajoute un style CSS pour mettre en gras les lettres b, p, q et d
    for (let i = 0; i < paragraphs.length; i++) {
        let text = paragraphs[i].textContent;
        let regex = /[bpqd]/gi;
        if (regex.test(text)) {
            paragraphs[i].innerHTML = text.replace(regex, '<span style="font-weight: bold;">$&</span>');
        }
    }
}
/* setTimeout(() => {
    unlovedLetters()
}, 1000); */

function visibility() {
    let elements = document.querySelectorAll("*");

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].tagName);
    elements[i].style.fontFamily = "Arial";
    elements[i].style.fontSize = "20px";
elements[i].style.backgroundColor = "white"
elements[i].style.color = "#000000"

    if (elements[i].tagName === "H1" || elements[i].tagName === "H2" || elements[i].tagName === "H3" || elements[i].tagName === "H4" || elements[i].tagName === "H5" || elements[i].tagName === "H6") {
        elements[i].style.fontSize = "40px";
    }

    if (elements[i].tagName === "SPAN") {
        elements[i].style.fontSize = "22px";
    }

    if (elements[i].tagName === "LI") {
        elements[i].style.fontSize = "28px";
    }

    if (elements[i].classList.length > 0) {
        elements[i].style.fontSize = "22px";
    }
}
let elem = document.querySelectorAll("[id]");

for (let i = 0; i < elem.length; i++) {
    elem[i].style.fontSize = "28px";
}

let attributes = document.querySelectorAll("a[href]");

for (let i = 0; i < attributes.length; i++) {
    attributes[i].style.fontSize = "25px";
}

let allParagraph = document.querySelectorAll("p");

for (let i = 0; i < allParagraph.length; i++) {
    allParagraph[i].style.fontSize = "25px";
}

// let divs = document.querySelectorAll("div");

// for (let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = "#ffffff";
//     divs[i].style.color = "#000000";
// }

let links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
    links[i].style.color = "blue";
    links[i].style.textDecoration = "underline";
}

}
visibility()

document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
      return; // La touche a déjà été traitée
    }

    switch (event.key) {
    case 'ArrowDown':
        // Faire quelque chose lorsque l'utilisateur appuie sur la flèche vers le bas
        break;
    case 'ArrowUp':
        // Faire quelque chose lorsque l'utilisateur appuie sur la flèche vers le haut
        break;
    case 'ArrowLeft':
        // Faire quelque chose lorsque l'utilisateur appuie sur la flèche vers la gauche
        break;
    case 'ArrowRight':
        // Faire quelque chose lorsque l'utilisateur appuie sur la flèche vers la droite
        break;
    default:
        return; // Ne rien faire si la touche n'est pas utilisée pour la navigation
    }

    event.preventDefault();
}, true);