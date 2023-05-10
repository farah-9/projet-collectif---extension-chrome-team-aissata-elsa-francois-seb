// const popup = document.getElementById("popup");
// const form = document.getElementById("options-form");
// const submitBtn = document.getElementById("submit-btn");
// const cancelBtn = document.getElementById("cancel-btn");
const vulgarite = document.getElementById('grosMots');
const dalto = document.getElementById('dalto');
const dyslexie = document.getElementById('dyslexie');
const bdpq = document.getElementById('bdpq');
const malVoyant = document.getElementById('malVoyant');
const loupe = document.getElementById('loupe');

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
  // if(vulgarite.checked){};
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
  vulgarite.addEventListener('click', onclick);
  malVoyant.addEventListener('click', onclick);
  loupe.addEventListener('click', onclick);
  //on enregistre la  clé toggle avec une valeur false dans le local storage
  chrome.storage.local.set({dalto: false});
  chrome.storage.local.set({dyslexie: false});
  chrome.storage.local.set({bdpq: false});
  chrome.storage.local.set({vulgarite: false});
  chrome.storage.local.set({malVoyant: false});
  chrome.storage.local.set({loupe: false});
  
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
      });
      chrome.storage.local.get(["bdpq"]).then((result) =>{
        if(result.bdpq == false){
          chrome.storage.local.set({bdpq: true})
        }else{
          chrome.storage.local.set({bdpq: false})
        }
      });
      chrome.storage.local.get(["vulgarite"]).then((result) =>{
        if(result.vulgarite == false){
          chrome.storage.local.set({vulgarite: true})
        }else{
          chrome.storage.local.set({vulgarite: false})
        }
      });
      chrome.storage.local.get(["malVoyant"]).then((result) =>{
        if(result.malVoyant == false){
          chrome.storage.local.set({malVoyant: true})
        }else{
          chrome.storage.local.set({malVoyant: false})
        }
      });
      chrome.storage.local.get(["loupe"]).then((result) =>{
        if(result.loupe == false){
          chrome.storage.local.set({loupe: true})
        }else{
          chrome.storage.local.set({loupe: false})
        }
      });
  }
      
});