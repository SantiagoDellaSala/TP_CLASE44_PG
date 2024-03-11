document.addEventListener("DOMContentLoaded", () => {
  /* Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs. */
  let h1 = document.querySelector("h1");
  let section = document.querySelector("section");
  let article = document.querySelector("article");

  /* Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”. */
  h1.textContent = "AGREGAR PELÍCULAS";

  // Agregar a la etiqueta <h1> la clase: “titulo”.
  h1.classList.add("titulo");

  // Agregar al artículo la clase: “fondoTransparente”.
  article.classList.add("fondoTransparente");

  // Agregar a la sección la clase: “fondoCRUD”.
  section.classList.add("fondoCRUD");
});