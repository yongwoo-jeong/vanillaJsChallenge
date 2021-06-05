const selectCountry = document.querySelector("select");

const COUNTRY_LS = "currentCountry";

function valueSubmit() {
  const currentValue = selectCountry.options[selectCountry.selectedIndex].value;
  localStorage.setItem("country", currentValue);
}

function saveCountry() {
  const savedCountry = localStorage.getItem("country");
  selectCountry.value = savedCountry;
}

function init() {
  selectCountry.addEventListener("change", valueSubmit);
  saveCountry();
}

init();
