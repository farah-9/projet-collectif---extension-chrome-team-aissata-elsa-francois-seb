function dys() {
    // Sélectionne tous les éléments de la page
    let elements = document.querySelectorAll("*, h1, h2, h3, h4, h5, h6");
    // Parcourt tous les éléments et applique un style
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].tagName);
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
dys()

function daltonism() {
    let elements = document.querySelectorAll("*");

    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i], elements[i].tagName)
        if (elements[i].tagName === "IMG") {
            elements[i].style = "filter: grayscale(100%);"
        }
        else {
            elements[i].style.color = "#cdcd0d"
        }
    }
}
daltonism()
