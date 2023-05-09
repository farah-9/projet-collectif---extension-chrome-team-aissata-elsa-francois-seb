// const popup = document.getElementById("popup");
// const form = document.getElementById("options-form");
// const submitBtn = document.getElementById("submit-btn");
// const cancelBtn = document.getElementById("cancel-btn");
const grosMots = document.querySelector('.grosMots');
const dalto = document.querySelector('.dalto');
const dyslexie = document.querySelector('.dyslexie');
const bdpq = document.querySelector('.bdpq');
const malVoyant = document.querySelector('.malVoyant');

// Masque la pop-up lorsque l'utilisateur clique sur le bouton "Valider"
// submitBtn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   popup.style.display = "none";
// });

// Masque la pop-up lorsque l'utilisateur clique sur le bouton "Annuler"
// cancelBtn.addEventListener("click", () => {
//   popup.style.display = "none";
// });

//Lance les options cochées après validation
// form.addEventListener("submit", () => {
  // if(grosMots.checked){};
  // if (dalto.checked) {
  //   setTimeout(() => {
  //     daltonism();
  //   }, 1000)
  // };
  // if (dyslexie.checked) {
  //   setTimeout(() => {
  //     dys();
  //   }, 1000)
  // }
  // if(bdpq.checked) {};
  // if(malVoyant.checked) { }
// })

document.addEventListener('DOMContentLoaded', function (){  
  //on écoute le bouton pour créer l'objet
  dalto.addEventListener('click', onclick); 
  dyslexie.addEventListener('click', onclick);
  bdpq.addEventListener('click', onclick);
  grosMots.addEventListener('click', onclick);
  //on enregistre la  clé toggle avec une valeur false dans le local storage
  chrome.storage.local.set({dalto: false})
  chrome.storage.local.set({dyslexie: false})
  chrome.storage.local.set({bdpq: false})
  chrome.storage.local.set({grosMots: false})
  function onclick(){
      //changement de la valeur de "toggle", pour pouvoir écouter le changement dans appOn.js

      //on récupère la valeur de toggle et on lui asssigne une valeur true ou false
      chrome.storage.local.get(["dalto"]).then((result) => {
          //console.log("le toggle est" + result.toggle);
      
          if (result.dalto == false){ 
              //console.log("toggle if =" + result.toggle);
              chrome.storage.local.set({dalto: true})
              
          } else {
              //console.log("toggle else = " + result.toggle);
              chrome.storage.local.set({dalto: false})
              

          }
      });
      chrome.storage.local.get(["dyslexie"]).then((result) =>{
        if(result.dyslexie == false){
          chrome.storage.local.set({dyslexie: true})
        }else{
          chrome.storage.local.set({dyslexie: false})
        }
      })
      chrome.storage.local.get(["bdpq"]).then((result) =>{
        if(result.bdpq == false){
          chrome.storage.local.set({bdpq: true})
        }else{
          chrome.storage.local.set({bdpq: false})
        }
      })
      chrome.storage.local.get(["grosMots"]).then((result) =>{
        if(result.grosMots == false){
          chrome.storage.local.set({grosMots: true})
        }else{
          chrome.storage.local.set({grosMots: false})
        }
      })
  }
      
});