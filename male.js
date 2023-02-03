function solicitarNombre() {
  let nombre = prompt("Ingrese su nombre para iniciar");
  alert("Hola " + nombre + ", un gusto saludarte");
}


let prod1 = "Perfume Calvin Klein";
let prod2 = "Labial millanel";
let prod3 = "Mascarilla millanel";

let prodElejido;

function ingresarOpcion() {
  opcion = prompt(
    "Ingrese el numero del producto que desea comprar :\n 1. Perfume Calvin Klein :\n 2. Labial millanel :\n 3. Mascarilla Millanel"
  );
  if (opcion === "1") {
    alert("Elegiste " + prod1);
    prodElejido = prod1;
  } else if (opcion === "2") {
    alert("Elegiste " + prod2);
    prodElejido = prod2;
  } else if (opcion === "3") {
    alert("Elegiste " + prod3);
    prodElejido = prod3;
  }
}

let metodo1 = "Efectivo";
let metodo2 = "Tarjeta de credito";
let metodo3 = "Transferencia";


function metodoPago() {
  let pago = prompt(
    "Elija su método de pago:\n" + "1. " + metodo1 + "\n" + "2. " + metodo2 + "\n" + "3. " + metodo3);
  if (pago === "1") {
    alert("Genial, tu producto " + prodElejido + " se abonará en " + metodo1);
  } else if (pago === "2") {
    alert("Genial, tu producto " + prodElejido + " se abonará con " + metodo2);
  } else if (pago === "3") {
    alert("Genial, tu producto " + prodElejido + " se abonará por " + metodo3);
  }
}

solicitarNombre();
ingresarOpcion();
metodoPago();
