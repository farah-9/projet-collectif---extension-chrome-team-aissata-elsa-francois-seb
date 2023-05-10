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

function grosMots() {
    const words = [
        "Merde", "merde", "Putain", "putain", "abruti", "Abruti", "bête", " Bête",
        "bouffon", "Bouffon", "bouffonne", "Bouffonne", "garce", "chier", "Garce",
        "fils de pute", "Fils de pute", "casse couille", "niquer", "Niquer",
        "imbécile", "incapable", "Incapable", "salop", "Salope", "sauvage", "Sauvage",
        "teub", "Teub", "tocard", " Tocard", "ta gueule", "Ta gueule", "Tapette",
        "tapette", "tebé", "ta race"
    ];
    const replacement = "****";

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


function visibility() {
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
        element.style.fontFamily = "Arial";
        element.style.backgroundColor = "white";
        element.style.color = "#000000";

        if (element.tagName.startsWith("H")) {
            element.style.fontSize = "40px";
        } else if (element.tagName === "SPAN") {
            element.style.fontSize = "22px";
        } else if (element.tagName === "LI" || element.classList.length > 0) {
            element.style.fontSize = "28px";
        }
    });

    const elem = document.querySelectorAll("[id]");
    elem.forEach((element) => {
        element.style.fontSize = "28px";
    });

    const attributes = document.querySelectorAll("a[href]");
    attributes.forEach((element) => {
        element.style.fontSize = "25px";
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((element) => {
        element.style.fontSize = "25px";
    });

    const links = document.querySelectorAll("a");
    links.forEach((element) => {
        element.style.color = "blue";
        element.style.textDecoration = "underline";
    });
}


chrome.storage.onChanged.addListener(() => {
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
    })
    // chrome.storage.local.get(["loupe"]).then((result) => {
    //     if (result.loupe == true) {
    //         console.log("loupe ça marche")
    //         grosMots();
    //     }
    // })
})