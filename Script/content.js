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

/* setTimeout(() => {
    dys();
}, 1000); */


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

function grosMots() {
    // La liste de mots à remplacer
    var words = ["Merde", "merde", "Putain", "putain", "abruti", "Abruti", "bête", " Bête", "bouffon", "Bouffon", "bouffonne", "Bouffonne", "garce", "chier", "Garce", "fils de pute", "Fils de pute", "casse couille", "niquer", "Niquer", "imbécile", "incapable", "Incapable", "salop", "Salope", "sauvage", "Sauvage", "teub", "Teub", "tocard", " Tocard", "ta gueule", "Ta gueule", "Tapette", "tapette", "tebé", "ta race"];

    // Le mot de remplacement
    var replacement = "Oups gros mot";

    // Récupérer tous les éléments HTML dans la page
    var elements = document.getElementsByTagName("*");

    // Parcourir chaque élément et son texte pour trouver les mots à remplacer
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            // Vérifier si le nœud est un élément de texte
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                // Remplacer les mots dans la liste par le mot de remplacement
                for (var k = 0; k < words.length; k++) {
                    var regex = new RegExp(words[k], "g");
                    text = text.replace(regex, replacement);
                }
                // Mettre à jour le nœud avec le nouveau texte
                if (text !== node.nodeValue) {
                    element.replaceChild(document.createTextNode(text), node);
                }
            }
        }
    }
}

/* setTimeout(() => {
    grosMots()
}, 1000); */

