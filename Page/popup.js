const popup = document.getElementById("popup");
const form = document.getElementById("options-form");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const grosMots = document.querySelector('#grosMots');
const dalto = document.querySelector('#dalto');
const dyslexie = document.querySelector('#dyslexie');
const bdpq= document.querySelector('#bdpq');
const malVoyant = document.querySelector('#malVoyant');

// Masque la pop-up lorsque l'utilisateur clique sur le bouton "Valider"
form.addEventListener("submit", (e) => {
  e.preventDefault();
  popup.style.display = "none";
});

// Masque la pop-up lorsque l'utilisateur clique sur le bouton "Annuler"
cancelBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

//Lance les options cochées après validation
form.addEventListener("submit", () => {
  // if(grosMots.checked){};
  if(dalto.checked){
      setTimeout(() => {
      daltonism();
    }, 1000)
  };
  if(dyslexie.checked) {
      setTimeout(() => {
      dys();
    }, 1000)}
  // if(bdpq.checked) {};
  // if(malVoyant.checked) { }
  })