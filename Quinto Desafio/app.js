function cargarDatos(){
	
	let dni = Number(prompt("Numero Dni: "));
	let nombre = prompt("Ingrese su nombre: ", "");
	let apellido = prompt("Ingrese su apellido: ", "");
	let saldo = Number(prompt("Ingrese el saldo: ", ""));
	let cuenta1 = new CuentaBancaria(dni,nombre,apellido,saldo);
	cuenta1.mostrarDatos();
}


function CuentaBancaria (dni,nombre,apellido,saldo) {
	
    this.dniTitular = dni;

	this.nombreTitular = nombre;

	this.apellidosTitular = apellido;

	this.saldo = saldo;

	this.mostrarDatos = function () {
		let msg = 'Ha creado una cuenta bancaria ';

	    msg = msg + 'Los datos de la cuenta son Nombre: ' + this.nombreTitular;

	    msg = msg + '; Apellidos: ' + this.apellidosTitular + '; Saldo: ' + this.saldo;

	    alert(msg);

	};
}

 





