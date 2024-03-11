document.addEventListener("DOMContentLoaded", () => {
  /* Desde el archivo /public/js/index.js, capturar los siguientes elementos: <main>,
<h2>, <a> y <p>, ubicados en el archivo: /views//index.ejs. */
  let main = document.querySelector("main");
  let h2 = document.querySelectorAll("h2");
  let a = document.querySelectorAll("a");
  let p = document.querySelectorAll("p");
  let subTitulo = document.querySelector(".subtitulo");

  /* Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”. */
  let nombre = prompt("Ingresá tu nombre: ", "");

  /* En caso de que el usuario no coloque su nombre, a la etiqueta <h2>, se le debe
    agregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que el
    usuario ingresó. */
  if (nombre !== null && nombre.trim() !== "") {
    alert(`Bienvenido ${nombre}`);
    subTitulo.textContent = `¡Bienvenido, ${nombre}!`;
  } else {
    alert("Bienvenido Invitado");
    subTitulo.textContent = `¡Bienvenido, Invitado!`;
  }

  /* Agregar a la etiqueta <h2> el estilo uppercase. */
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.textTransform = "uppercase";
  }

  /* A la etiqueta <a>, colocarle el estilo correspondiente para que asuma el siguiente
    color: #E51B3E. */
  for (let i = 0; i < a.length; i++) {
    a[i].style.color = "#E51B3E";
  }

  /* Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de
    pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la
    clase “fondo”. */
  if (confirm("¿Desea colocar un fondo de pantalla?")) {
    document.body.classList.add("fondo");
  }

  /* A todos los párrafos que fueron capturados, asignar a los pares la clase:
    “descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”. */
  for (let i = 0; i < p.length; i++) {
    if (i % 2 === 0) {
      // Si es par
      p[i].classList.add("destacadoPar");
    } else {
      p[i].classList.add("destacadoImpar");
    }
  }

  /* Finalmente, establecer como visible a la etiqueta <main> en el browser o
navegador, aplicando el estilo: display : block. */
  main.style.display = "block";
});
