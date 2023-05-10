const vulgarite = document.getElementById('grosMots');
const dalto = document.getElementById('dalto');
const dyslexie = document.getElementById('dyslexie');
const bdpq = document.getElementById('bdpq');
const malVoyant = document.getElementById('malVoyant');
const loupe = document.getElementById('loupe');

document.addEventListener('DOMContentLoaded', function() {
  //on écoute le changement de la valeur de chaque checkbox
  dalto.addEventListener('change', function() {
    chrome.storage.local.set({dalto: dalto.checked});
  });
  dyslexie.addEventListener('change', function() {
    chrome.storage.local.set({dyslexie: dyslexie.checked});
  });
  bdpq.addEventListener('change', function() {
    chrome.storage.local.set({bdpq: bdpq.checked});
  });
  vulgarite.addEventListener('change', function() {
    chrome.storage.local.set({vulgarite: vulgarite.checked});
  });
  malVoyant.addEventListener('change', function() {
    chrome.storage.local.set({malVoyant: malVoyant.checked});
  });
  loupe.addEventListener('change', function() {
    chrome.storage.local.set({loupe: loupe.checked});
  });

  //on enregistre la valeur de chaque checkbox dans le local storage
  chrome.storage.local.set({
    dalto: dalto.checked,
    dyslexie: dyslexie.checked,
    bdpq: bdpq.checked,
    vulgarite: vulgarite.checked,
    malVoyant: malVoyant.checked,
    loupe: loupe.checked
  });
});