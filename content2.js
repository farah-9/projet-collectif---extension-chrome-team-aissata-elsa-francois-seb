function dys() {
    // Sélectionne tous les éléments de la page
    let elements = document.getElementsByTagName('*');
    // Parcourt tous les éléments et applique un style
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontFamily = "Arial";
        elements[i].style.color = "#2E2E2E";
        elements[i].style.backgroundColor = "#ffffe0"
        // Vérifie et modifie si la taille de police est inférieure à 14pt
        if (parseFloat(getComputedStyle(elements[i]).fontSize) < 16) {
            elements[i].style.fontSize = "16pt";
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

function daltonism() {
    let elements = document.querySelectorAll("*");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].tagName === "IMG") {
            elements[i].style = "filter: grayscale(100%);";
        }
        else {
            elements[i].style.color = "#cdcd0d";
        }
    }
}

function unlovedLetters() {
    // Sélectionne tous les éléments de la page
    let paragraphs = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    // Parcourt tous les éléments et ajoute un style CSS pour mettre en gras les lettres b, p, q et d
    for (let i = 0; i < paragraphs.length; i++) {
        let text = paragraphs[i].textContent;
        let regex = /[bpqd]/gi;
        if (regex.test(text)) {
            paragraphs[i].innerHTML = text.replace(regex, '<span style="font-weight: bold;">$&</span>');
        }
    }
}

function grosMots() {
    const words = [
        "Merde", "merde", "Putain", "putain", "abruti", "Abruti", "bête", " Bête",
        "bouffon", "Bouffon", "bouffonne", "Bouffonne", "garce", "chier", "Garce",
        "fils de pute", "Fils de pute", "casse couille", "niquer", "Niquer",
        "imbécile", "incapable", "Incapable", "salop", "Salope", "sauvage", "Sauvage",
        "teub", "Teub", "tocard", " Tocard", "ta gueule", "Ta gueule", "Tapette",
        "tapette", "tebé", "ta race"
    ];
    const replacement = "*****";

    const elements = document.getElementsByTagName("*");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const childNodes = element.childNodes;
        const childNodesLength = childNodes.length;

        for (let j = 0; j < childNodesLength; j++) {
            const node = childNodes[j];

            if (node.nodeType === Node.TEXT_NODE) {
                let text = node.nodeValue;

                for (let k = 0; k < words.length; k++) {
                    const regex = new RegExp(words[k], "g");
                    text = text.replace(regex, replacement);
                }

                if (text !== node.nodeValue) {
                    const newNode = document.createTextNode(text);
                    element.replaceChild(newNode, node);
                }
            }
        }
    }
}

function lens() {
    // Écouteur d'événement pour détecter le passage de la souris sur un élément
    document.addEventListener('mouseover', function (event) {
        // Vérifie si l'élément survolé est un élément de la page (et non l'extension elle-même)
        if (event.target !== document.documentElement) {
            // Applique une transformation d'agrandissement à l'élément
            event.target.style.transform = 'scale(1.5)';
        }
    });

    // Écouteur d'événement pour détecter la sortie de la souris d'un élément
    document.addEventListener('mouseout', function (event) {
        // Vérifie si l'élément n'est pas l'extension elle-même
        if (event.target !== document.documentElement) {
            // Réinitialise la transformation de l'élément à sa taille normale
            event.target.style.transform = 'scale(1)';
        }
    });
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "updateSettings") {
        chrome.storage.local.get(["dyslexie"]).then((result) => {
            if (result.dyslexie == true) {
                console.log("Dys ça marche")
                dys();
            }
        });
        chrome.storage.local.get(["dalto"]).then((result) => {
            if (result.dalto == true) {
                console.log("dalto ça marche")
                daltonism();
            }
        });
        chrome.storage.local.get(["bdpq"]).then((result) => {
            if (result.bdpq == true) {
                console.log("Unloved ça marche")
                unlovedLetters();
            }
        });
        chrome.storage.local.get(["vulgarite"]).then((result) => {
            if (result.vulgarite == true) {
                console.log("grosMots ça marche")
                grosMots();
            }
        });
        chrome.storage.local.get(["malVoyant"]).then((result) => {
            if (result.malVoyant == true) {
                console.log("malVoyant ça marche")
                visibility();
            }
        });
        chrome.storage.local.get(["loupe"]).then((result) => {
            if (result.loupe == true) {
                console.log("loupe ça marche")
                visibility();
            }
        });
    }
});