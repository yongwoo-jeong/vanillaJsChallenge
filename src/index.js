const selectCountry = document.querySelector("select");

function valueSubmit() {
  const currentValue = selectCountry.options[selectCountry.selectedIndex].value;
  localStorage.setItem("country", currentValue);
  console.log(currentValue);
}

function init() {
  selectCountry.addEventListener("change", valueSubmit);
}

init();
