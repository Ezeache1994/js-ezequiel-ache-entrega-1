/*
alert("¡Bienvenido! Esta es una simulación de inversión donde podrás simular el monto que deseas donar o invertir. Solo necesitas proporcionar un monto, especificar si es una donacion o una inversion. Una vez que tengamos todos los datos, te informaremos sobre el monto invertido más el IVA.");

//-----------------------------------------------------------------------

let userNamed = prompt ("Ingresa tu nombre y apellido")
let MontoInvertir = parseInt (prompt ("Ingresa el monto que deseas ingresar " + userNamed))

//-----------------------------------------------------------------------

function investingAndName(nombreInversiones){
    return nombreInversiones;
}
let concatenacion_Nombre_Inversiones = investingAndName (alert("Bienvenido/a " + userNamed + " Haz decidido ingresar " + MontoInvertir));

//-----------------------------------------------------------------------

alert ("Ahora con el dinero ingresado debes escoger entre invertir y donar " + userNamed);

//-----------------------------------------------------------------------

let ivaInversion =0.21;
let ivaDonacion = 0.11;
let operacion = prompt ("¿Que deseas hacer donar o invertir?  " + userNamed)

//-----------------------------------------------------------------------

switch (operacion) {
    case "invertir":
        let inversionchoice =(MontoInvertir * ivaInversion) + MontoInvertir;
        alert("el monto invertido en micro emprendimientos es un total de " + inversionchoice + " + iva  " + userNamed);
        break;

    case "donar":
        let donacionchoice =(MontoInvertir * ivaDonacion) + MontoInvertir;
        alert("el monto donado en micro emprendimientos es un total de " + donacionchoice + " + iva " + userNamed);
        break;

    default:
        alert ("Opcion no valida finalizamos la transaccion " + userNamed)
        return operacion;
};

//-----------------------------------------------------------------------

alert("Para finalizar " + userNamed +  " debes completar tu PIN de seguridad de 6 números los primeros 5 numeros de tu PIN son 15345# introduce el numero faltante");

//-----------------------------------------------------------------------

let pin = "12345";

let completado = false;

//-----------------------------------------------------------------------

while (!completado) {
    let numeroFaltante = prompt("Ingresa el número faltante para completar tu PIN (debe ser un número del 0 al 9):");

    if (numeroFaltante === "6") {
        alert("PIN completado. ¡Gracias!");
        completado = true;
    } else {
        alert("Erro el digito " + numeroFaltante + " Es un número inválido. Por favor, ingresa un número del 0 al 9.");
    }
}

//-----------------------------------------------------------------------

*/

//codigo viejo arriba------------------------------------------------------------------------------------------------------------------------------------------------

function iniciarTransaccion(){
    alert(
        "¡Bienvenido! Esta es una simulación de inversión donde podrás simular el monto que deseas donar o invertir. Solo necesitas proporcionar un monto, especificar si es una donacion o una inversion. Una vez que tengamos todos los datos, te informaremos sobre el monto invertido más el IVA."
    );
  //-----------------------------------------------------------------------

    let userNamed = prompt("Ingresa tu nombre y apellido");
    let MontoInvertir = parseInt(
    prompt("Ingresa el monto que deseas ingresar " + userNamed)
);

//-----------------------------------------------------------------------

alert(
    "Bienvenido/a " + userNamed + " Haz decidido ingresar " + MontoInvertir
);

  //-----------------------------------------------------------------------

    //-----------------------------------------------------------------------

    alert(
        "Ahora con el dinero ingresado debes escoger entre invertir y donar " +
          userNamed
      );
    
      //-----------------------------------------------------------------------
    
      let ivaInversion = 0.21;
      let ivaDonacion = 0.11;
      let operacion = prompt("¿Que deseas hacer donar o invertir?  " + userNamed);
    
      //-----------------------------------------------------------------------
    
      switch (operacion) {
        case "invertir":
          let inversionchoice = MontoInvertir * ivaInversion + MontoInvertir;
          alert(
            "el monto invertido en micro emprendimientos es un total de " +
              inversionchoice +
              " + iva  " +
              userNamed
          );
          break;
        case "donar":
          let donacionchoice = MontoInvertir * ivaDonacion + MontoInvertir;
          alert(
            "el monto donado en micro emprendimientos es un total de " +
              donacionchoice +
              " + iva " +
              userNamed
          );
          break;
    
        default:
          alert("Opcion no valida finalizamos la transaccion " + userNamed);
          break;
      }
    
      if (operacion === "invertir" || operacion === "donar") {
        alert(
          "Para finalizar " +
            userNamed +
            " debes completar tu PIN de seguridad de 6 números los primeros 5 numeros de tu PIN son 15345# introduce el numero faltante"
        );
    
        //-----------------------------------------------------------------------
    
        let pin = "12345";
    
        let completado = false;
    
        //-----------------------------------------------------------------------
    
        while (!completado) {
          let numeroFaltante = prompt(
            "Ingresa el número faltante para completar tu PIN (debe ser un número del 0 al 9):"
          );
    
          if (numeroFaltante === "6") {
            alert("PIN completado. ¡Gracias!");
            completado = true;
          } else {
            alert(
              "Erro el digito " +
                numeroFaltante +
                " Es un número inválido. Por favor, ingresa un número del 0 al 9."
            );
          }
        }
    }
    
      //-----------------------------------------------------------------------
    }
    
    iniciarTransaccion();
    
    //-----------------------------------------------------------------------








//codigo revisado por jose abajo-------------------------------------------------------------------------------------------------------------------------------------------------
/*
function iniciarTransaccion() {
  alert(
    "¡Bienvenido! Esta es una simulación de inversión donde podrás simular el monto que deseas donar o invertir. Solo necesitas proporcionar un monto, especificar si es una donacion o una inversion. Una vez que tengamos todos los datos, te informaremos sobre el monto invertido más el IVA."
  );

  //-----------------------------------------------------------------------

  let userNamed = prompt("Ingresa tu nombre y apellido");
  let MontoInvertir = parseInt(
    prompt("Ingresa el monto que deseas ingresar " + userNamed)
  );

  //-----------------------------------------------------------------------

  alert(
    "Bienvenido/a " + userNamed + " Haz decidido ingresar " + MontoInvertir
  );

  //-----------------------------------------------------------------------

  alert(
    "Ahora con el dinero ingresado debes escoger entre invertir y donar " +
      userNamed
  );

  //-----------------------------------------------------------------------

  let ivaInversion = 0.21;
  let ivaDonacion = 0.11;
  let operacion = prompt("¿Que deseas hacer donar o invertir?  " + userNamed);

  //-----------------------------------------------------------------------

  switch (operacion) {
    case "invertir":
      let inversionchoice = MontoInvertir * ivaInversion + MontoInvertir;
      alert(
        "el monto invertido en micro emprendimientos es un total de " +
          inversionchoice +
          " + iva  " +
          userNamed
      );
      break;
    case "donar":
      let donacionchoice = MontoInvertir * ivaDonacion + MontoInvertir;
      alert(
        "el monto donado en micro emprendimientos es un total de " +
          donacionchoice +
          " + iva " +
          userNamed
      );
      break;

    default:
      alert("Opcion no valida finalizamos la transaccion " + userNamed);
      break;
  }

  if (operacion === "invertir" || operacion === "donar") {
    alert(
      "Para finalizar " +
        userNamed +
        " debes completar tu PIN de seguridad de 6 números los primeros 5 numeros de tu PIN son 15345# introduce el numero faltante"
    );

    //-----------------------------------------------------------------------

    let pin = "12345";

    let completado = false;

    //-----------------------------------------------------------------------

    while (!completado) {
      let numeroFaltante = prompt(
        "Ingresa el número faltante para completar tu PIN (debe ser un número del 0 al 9):"
      );

      if (numeroFaltante === "6") {
        alert("PIN completado. ¡Gracias!");
        completado = true;
      } else {
        alert(
          "Erro el digito " +
            numeroFaltante +
            " Es un número inválido. Por favor, ingresa un número del 0 al 9."
        );
      }
    }
  }

  //-----------------------------------------------------------------------
}

iniciarTransaccion();

//-----------------------------------------------------------------------

*/