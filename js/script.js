//ejercicio de practica

let usuario = "";
let menu = "1 - Calculadora\n2 - Tabla de multiplicar\n0 - Para salir";
let menuCalculadora = "1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Dividir";
let opcion = 0;
let opcionCalculadora = 0;
let numero = 0;

do {
  usuario = prompt("Ingrese su nombre");
} while (usuario == "" || !isNaN(usuario));

alert("Bienvenido al ejercio practico" + " " + usuario);
do {
  alert(menu);
  opcion = Number(prompt("Ingresa la opcion que desea ejecutar"));
  if (opcion === 1) {
    alert("Calculemos");
    do {
      alert(menuCalculadora);
      opcionCalculadora = Number(
        prompt("Ingresa la operacion que desea realizar")
      );
      if (opcionCalculadora === 1) {
        alert("SUMEMOS");
        let num1 = Number(prompt("Ingrese el primer numero"));
        let num2 = Number(prompt("Ingrese el segundo numero"));
        let resultadoSuma = num1 + num2;
        alert(resultadoSuma);
      } else if (opcionCalculadora === 2) {
        alert("Restemos");
        num1 = Number(prompt("Ingrese el primer numero"));
        num2 = Number(prompt("Ingrese el segundo numero"));
        let resultadoResta = num1 - num2;
        alert(resultadoResta);
      } else if (opcionCalculadora === 3) {
        alert("Multipliquemos");
        num1 = Number(prompt("Ingrese el primer numero"));
        num2 = Number(prompt("Ingrese el segundo numero"));
        let resultadoMultipicacion = num1 * num2;
        alert(resultadoMultipicacion);
      } else if (opcionCalculadora === 4) {
        alert("Dividamos");
        num1 = Number(prompt("Ingrese el primer numero"));
        num2 = Number(prompt("Ingrese el segundo numero"));
        let resultadoDivision = num1 / num2;
        alert(resultadoDivision);
      }
      break;
    } while (!isNaN(opcionCalculadora));
  } else if (opcion === 2) {
    alert("Tabla de multiplicar");
    do {
      numero = Number(prompt("Ingrese la tabla de multiplicar que desea ver"));
      for (let i = 1; i <= 10; i++) {
        let tabla = numero * i;
        alert(numero + " " + "x" + " " + i + " " + "=" + " " + tabla);
      }
      break;
    } while (!isNaN(numero));
  }
} while (opcion != 0);
