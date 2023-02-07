/*Los contratan a ustedes para realizar un sistema de control de empleados para una empresa. La
idea es poder ingresar la información de un empleado para que esta quede almacenada en una
base de datos

Consideraciones:

1. Es necesario ingresar información como: documento empleado, nombre empleado, cargo empleado, valor hora y cantidad horas del empleado
2. Se debe generar una funcionalidad para ingresar un nuevo empleado; y el sistema, después de registrar un empleado, debe permitir preguntar si se desea registrar otro empleado o no
3. Se debe generar una funcionalidad que permita buscar un empleado por número de cédula
4. Se debe generar una funcionalidad que permita mostrar el listado de todos los empleados almacenados
5. La información para mostrar para cada empleado es únicamente: nombre, cargo y salario
6. Se debe mostrar siempre un menú de opciones que permita seleccionar entre diferentes las funciones, y solo se podrá finalizar el ejercicio con una opción de salir o finalizar


Nota: Debe existir mínimo 2 funciones en la solución del algoritmo*/



function SistemadeEmpleados(){ //Funcion principal del sistema de control de empleados

	let empleados = []; //Se crea el array/vector/arreglo empleados el cual, a su vez contiene el vector/array el empleado

  function menu(opcion) {//funcion menu principal la cual crea el menu y pide la opcion al usuario
	opcion = prompt("Ingresa:"+"\n"+"1)Registar Usuario"+"\n"+"2)Buscar Usuario"+"\n"+"3)Lista de empleados"+"\n"+"4) Salir")
	return opcion //regresa la opcion elegida por el usuario para seguir siendo usada la variable opcion dentro de el programa
  }
  
  
  function ingresarEmpleado() { // funcion para ingresa los datos de un usuario ademas de crear el array empleado y guardar la infomacion en el vector empleado que a su vez se guarda ene el vector empleadoS
	let documento = parseInt(prompt("Ingresa la cedula del nuevo empleado"))
	let nombre = prompt("Ingresa el nombre del empleado")
	let cargo = prompt("Ingresa el cargo del empleado")
	let valorhora = parseInt(prompt("Ingresa el valor/hora que se le pagará al empleado"))
	let numerohoras = parseInt(prompt("Ingresa el numero de horas que trabajará el empleado"))
	let salario= valorhora*numerohoras // se crea la variable con el resultado de la multiplicacion valor de las horas por la cantidad de horas 
	let empleado = [] //creacion del array empleado
	empleado[0] =documento,empleado[1] =nombre,empleado[2] =cargo,empleado[3] =salario //se guarda la informacion del empleado en el array empleado
	empleados.push(empleado)//se guarda la informacion del array empleado en el array empleadoS
  }
  
  function buscarEmpleado (){ // funcion para buscar un empleado por medio de la cedula
	let cc = parseInt(prompt("Ingresa la cedula"));
	let control = true;
	
	for (let i=0;i<empleados.length;i++) {
	    if (control && empleados[i][0] === cc) { // si la cedula ingresada es igual a la cedula guardada en el array entonces imprime 
		  alert("El nombre del empleado es "+empleados[i][1]
		  +"\n"+"El cargo del empleado es "+empleados[i][2]
		  +"\n"+"El salario del empleado es "+empleados[i][3])
		  control = false;
	    } 
	}
	if (control) { // si no sale este error
	    alert("No se encuentra este empleado");
	}
  }
  
  function listadeEmpleados (){ // funcion para mostrar cada empleado usando un for
	
	for(let i=0;i<empleados.length; i++) {
	      alert("El nombre del empleado es "+empleados[i][1]
		  +"\n"+"El cargo del empleado es" +empleados[i][2]
		  +"\n"+"El salario del empleado es "+empleados[i][3])// una alerta por cada empleado
	}
	
	console.log(empleados)//imprime la informacion del array por consola
  
  }
  
  let repetir = true; //se crea variable para repetir la funcion de ingresar el usuario 
  
  while(repetir){
	switch (+menu()) {
	    
	    case 1: // se ejecuta la funcion ingresas empleado
		  ingresarEmpleado();
  
		  while (repetir) { // mientras el usuario ingrese 1 la funcion ingresar empleado
			let otroEmpleado = prompt("1)Quieres ingresar otro empleado?"+" 2)Salir")
			switch (otroEmpleado) {
  
			    case "1":
				  ingresarEmpleado();
			    
				  break;
  
  
			    case "2":
				  repetir = false; // si el usuario no quiere repetir continua con el menu principal

				  break;
			}
		  }
		  repetir = true; // 

		  break;
  
	    case 2:
		  buscarEmpleado(); // se ejecuta la funcion del menu 2
  
		  break;
  
	    case 3:
		  listadeEmpleados(); // se ejecuta la funcion del menu 3

		  break;
  
	    case 4:
		alert("cerrando...")// se finaliza la aplicacion
		  repetir = false;
  
		  break;
  
	    default:
		  alert("Debes elegir una opcion del menu")// si el usuario ingresa un numero distinto al del muenu sale un error y se repite el menu principal
		  menu();

		  break;
	}
   }
}
SistemadeEmpleados()//ejecuta la funcion principal