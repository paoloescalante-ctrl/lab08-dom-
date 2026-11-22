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

const prueba = new Tarea("Estudiar JavaScript");
console.log(prueba.descripcion());   // [ ] Estudiar JavaScript
prueba.alternar();
console.log(prueba.descripcion());   // [x] Estudiar JavaScript