// Tarea: lista de tareas con clase, DOM y eventos
class Tarea {
  constructor(texto) {
    this.texto = texto;
    this.hecha = false;
  }

  alternar() {
    this.hecha = !this.hecha;
  }

  descripcion() {
    return (this.hecha ? "[x] " : "[ ] ") + this.texto;
  }
}

const tareas = [new Tarea("Estudiar JavaScript"), new Tarea("Terminar el laboratorio 08")];

const formTarea = document.querySelector("#formTarea");
const textoTarea = document.querySelector("#textoTarea");
const listaTareas = document.querySelector("#listaTareas");
const contador = document.querySelector("#contador");

function actualizarContador() {
  const pendientes = tareas.filter((t) => !t.hecha).length;
  contador.textContent = "Pendientes: " + pendientes;
}

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  if (tarea.hecha) li.classList.add("hecha");

  const span = document.createElement("span");
  span.textContent = tarea.descripcion();

  const btnMarcar = document.createElement("button");
  btnMarcar.textContent = "Marcar";
  btnMarcar.addEventListener("click", () => {
    tarea.alternar();
    span.textContent = tarea.descripcion();
    li.classList.toggle("hecha", tarea.hecha);
    actualizarContador();
  });

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", () => {
    const i = tareas.indexOf(tarea);
    if (i !== -1) tareas.splice(i, 1);
    li.remove();
    actualizarContador();
  });

  li.appendChild(span);
  li.appendChild(btnMarcar);
  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);
}

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = textoTarea.value.trim();
  if (texto === "") return;
  const nueva = new Tarea(texto);
  tareas.push(nueva);
  mostrarTarea(nueva);
  actualizarContador();
  textoTarea.value = "";
});

tareas.forEach(mostrarTarea);
actualizarContador();