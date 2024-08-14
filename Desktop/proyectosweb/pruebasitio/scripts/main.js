let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/mundo.jpg") {
    miImage.setAttribute("src", "images/mundo2.jpg");
  } else {
    miImage.setAttribute("src", "images/mundo.jpg");
  }
};



/*document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };*/
  