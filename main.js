let balanceActual = 0;
let usuario;
let usuarioNuevo;
let password;
let passwordNuevo;


function cuentaBank() {

    let opcionUsuario = parseInt(prompt("Bienvenido " + usuario + " que operacion quieres realizar: \n 1.Consular Saldo. \n 2.Depositar. \n 3.Retirar. \n 4.Salir"));

    switch (opcionUsuario) {

        case 1:

            alert(" Tu saldo actual es: " + balanceActual);

            alert(" Regresando al menu... ");

            cuentaBank();

            break;

        case 2:

            let deposito = parseInt(prompt(" Ingrese cantidad a depositar : "));

            balanceActual = deposito + balanceActual;

            alert(" Tu balance actual es: " + balanceActual);

            alert(" Regresando al menu... ");

            cuentaBank();

            break;

        case 3:

            let retirar = parseInt(prompt(" Ingrese cantidad a depositar : "));

            if (retirar < balanceActual) {

                balanceActual = balanceActual - retirar ;

                alert(" Tu balance actual es: " + balanceActual);

            } else {

                alert(" No puedes retirar esa cantidad, saldo insuficiente. ");

                alert(" Regresando al menu... ");

                cuentaBank();

            }

            alert(" Regresando al menu... ");

            cuentaBank();

            break;

        case 4:

            salidaBank();

            break;

        default:

            alert("Ingresa el numero de una opcion valida.");

            cuentaBank();


    }

}

function servicioBank() {

    let opcionInterfaz = parseInt(prompt("Bienvenido a Kingsman Bank que desea hacer: \n 1.Acceder a Cuenta. \n 2.Crear cuenta. \n 3.Cancelar operacion."));

    switch (opcionInterfaz) {

        case 1:

            usuario = prompt(" Ingresa tu usuario: ");

            if (usuario === usuarioNuevo) {

                password = prompt(" Ingresa tu contraseña: ");

                if (password === passwordNuevo) {

                    cuentaBank();

                } else {

                    alert(" Contraseña no registrada o incorrecta, vuelve a intentarlo. ");

                    servicioBank();

                }

            } else {

                alert(" Usuario no registrado o incorrecto, vuelve a intentarlo. ");

                servicioBank();

            }

            break;

        case 2:

            usuarioNuevo = prompt(" Registra tu usuario \n (recuerda tu usuario, la necesitaras para acceder a tu cuenta.): ");

            passwordNuevo = prompt(" Registra tu contraseña \n (recuerda tu contraseña, la necesitaras para acceder a tu cuenta.): ");

            alert(" Usuario creado volviendo al menu... ");

            servicioBank();

            break;

        case 3:

            salidaBank();

            break;

        default:

            alert("Ingresa el numero de una opcion valida.");

            servicioBank();

    }

}

alert(" Simulador de Banco by: Jiovanni Martinez :) ");

servicioBank();

function salidaBank() {
    alert("Gracias por su preferencia, hasta luego.");
};
