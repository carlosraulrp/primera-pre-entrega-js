//ejercicio de practica
//variables
let usuario = ""
let menu = "1 - Calculadora\n2 - Tabla de multiplicar\n0 - Para salir"
let menuCalculadora = "1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Dividir"
let opcion = 0
let opcionCalculadora = 0
let numero = 0
let num1
let num2
//funciones
function suma(){
  return num1 + num2
}
function resta(){
  return num1 - num2
}
function multicacion(){
  return num1 * num2
}
function division(){
  return num1 / num2
}

do {
  usuario = prompt("Ingrese su nombre")
} while (usuario == "" || !isNaN(usuario))

alert("Bienvenido al ejercio practico" + " " + usuario)
do {
  alert(menu)
  opcion = Number(prompt("Ingresa la opcion que desea ejecutar"))
  if (opcion === 1) {
    alert("Calculemos")
    do {
      alert(menuCalculadora)
      opcionCalculadora = Number(
        prompt("Ingresa la operacion que desea realizar")
      );
      if (opcionCalculadora === 1) {
        alert("SUMEMOS");
        num1 = Number(prompt("Ingrese el primer numero"))
        num2 = Number(prompt("Ingrese el segundo numero"))
        let resultadoSuma = suma()
        alert(resultadoSuma)
      } else if (opcionCalculadora === 2) {
        alert("Restemos")
        num1 = Number(prompt("Ingrese el primer numero"))
        num2 = Number(prompt("Ingrese el segundo numero"))
        let resultadoResta = resta()
        alert(resultadoResta)
      } else if (opcionCalculadora === 3) {
        alert("Multipliquemos")
        num1 = Number(prompt("Ingrese el primer numero"))
        num2 = Number(prompt("Ingrese el segundo numero"))
        let resultadoMultipicacion = multicacion()
        alert(resultadoMultipicacion)
      } else if (opcionCalculadora === 4) {
        alert("Dividamos")
        num1 = Number(prompt("Ingrese el primer numero"))
        num2 = Number(prompt("Ingrese el segundo numero"))
        let resultadoDivision = division()
        alert(resultadoDivision)
      }
      break
    } while (!isNaN(opcionCalculadora))
  } else if (opcion === 2) {
    alert("Tabla de multiplicar");
    do {
      numero = Number(prompt("Ingrese la tabla de multiplicar que desea ver"))
      for (let i = 1; i <= 10; i++) {
        let tabla = numero * i
        alert(numero + " " + "x" + " " + i + " " + "=" + " " + tabla)
      }
      break;
    } while (!isNaN(numero))
  }
} while (opcion != 0)
