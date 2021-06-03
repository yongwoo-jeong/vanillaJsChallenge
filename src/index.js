// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>

const h1 = document.querySelector("h1");

function handleResize() {
  const width = window.outerWidth;
  if (width > 1200) {
    h1.style.backgroundColor = "orange";
  } else if (850 <= width && width <= 1200) {
    h1.style.backgroundColor = "darkviolet";
  } else {
    h1.style.backgroundColor = "mediumblue";
  }
}

window.addEventListener("resize", handleResize);
