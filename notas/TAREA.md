# Tarea: Mi componente interactivo

## Componente elegido
Lista de tareas donde el usuario puede agregar tareas, marcarlas como hechas y borrarlas.

## Codigo principal
```js
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

function mostrarTarea(tarea) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = tarea.descripcion();

  const btnMarcar = document.createElement("button");
  btnMarcar.textContent = "Marcar";
  btnMarcar.addEventListener("click", () => {
    tarea.alternar();
    span.textContent = tarea.descripcion();
    li.classList.toggle("hecha", tarea.hecha);
  });

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", () => li.remove());

  li.append(span, btnMarcar, btnBorrar);
  listaTareas.appendChild(li);
}

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  const nueva = new Tarea(textoTarea.value.trim());
  mostrarTarea(nueva);
});
```

## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| Escribir "Comprar pan" y presionar Agregar | La tarea aparece en la lista y el contador sube en 1 | Si |
| Presionar Marcar en una tarea | El texto se tacha, muestra [x] y el contador baja en 1 | Si |
| Presionar Borrar en una tarea | La tarea desaparece de la lista | Si |
| Enviar el formulario con el campo vacío | No se agrega nada | Si |

## Por que disene asi mi clase
Elegí los atributos `texto` y `hecha` porque son lo mínimo que necesita una tarea: qué hay que hacer y si ya se hizo. El método `alternar()` cambia el estado sin tocar el DOM, y `descripcion()` devuelve el texto que se muestra en la página, igual que en la clase Producto del Ejercicio 5. Así la clase se encarga de los datos y las funciones del DOM solo de mostrarlos.