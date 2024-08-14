let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/mundo.jpg") {
    miImage.setAttribute("src", "images/mundo2.jpg");
  } else {
    miImage.setAttribute("src", "images/mundo.jpg");
  }
};
  let miBoton = document.querySelector("button");
  let miTitulo = document.querySelector("h1");

  function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "El mundo en nuestras manos, " + miNombre;
    }  
  
  }
  
  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "El mundo en nuestras manos, " + nombreAlmacenado;
  }
  
  miBoton.onclick = function () {
    estableceNombreUsuario();
  };
  




/*document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };*/
  