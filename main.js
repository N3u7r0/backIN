class Producto {
    constructor(id, tipo, marca, nombre, precio, cantidad) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let productos = [];
productos.push(new Producto(1, "smartphone", "samsung", "a33", 100000, 3));
productos.push(new Producto(2, "smartphone", "motorola", "g82", 95000, 3));
productos.push(new Producto(3, "smartphone", "xiaomi", "note11", 12000, 5));
productos.push(new Producto(4, "notebook", "asus", "nitro5", 200000, 2));
productos.push(new Producto(5, "notebook", "asus", "aspire8", 250000, 1));
productos.push(new Producto(6, "notebook", "lenovo", "legion", 200000, 6));
productos.push(new Producto(7, "impresora", "epson", "l3210", 380000, 3));
productos.push(new Producto(8, "tv", "samsung", "au7000", 400000, 5));
productos.push(new Producto(9, "tv", "samsung", "au8000", 620000, 5));
productos.push(new Producto(10, "tv", "tcl", "and1025", 120500, 10));

let tBodyProductos = document.getElementById("tbProductos");
//con el for, recorro los productos, y con la funcion listarProductos creo una plantilla y los agrego al DOM.
for (item of productos) {
    function listarProductos() {
        let nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML =
            `
        <td>${(item.id)}</td>
        <td>${item.tipo}</td>
        <td>${item.marca}</td>
        <td>${item.nombre}</td>
        <td>$${item.precio}</td>
        <td>${item.cantidad}</td>
        `;
        tBodyProductos.appendChild(nuevaFila);
    }
    listarProductos();
}

function agregarItem() {
    //funcion que responde al boton principal, guardando todos los datos de los inputs.
    item = [];// ==> este array es para guardar e igualar el "item del for" que recorre la funcion listarProductos.
    item.id = productos.length + 1;
    item.tipo = document.getElementById("inputTipo").value;
    item.marca = document.getElementById("inputFabricante").value;
    item.nombre = document.getElementById("inputModelo").value;
    item.precio = parseInt(document.getElementById("inputPrecio").value);
    item.cantidad = parseInt(document.getElementById("inputCantidad").value);
    // .value al final es para extraer lo que ingresamos en los inputs.

    // if para uqe no permita crear articulos vacios
    if (item.tipo != "" && item.marca != "" && item.nombre != "" && item.precio != "" && item.cantidad != "") {
        productos.push(new Producto(item.id, item.tipo, item.marca, item.nombre, item.precio, item.cantidad));
        listarProductos();
        resetearFormulario();//=====>aca llame la funcion para borrar el formulario.
    } else {
        alert("por favor, complete todos los campos")
    }
}

//boton "agregar producto"
let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", agregarItem);

//para que borre los campos del formulario (la etiqueta tiene que ser form en HTML)
function resetearFormulario() {
    document.getElementById("formulario").reset();
}

console.log("creado por Brian Fabian Sabatini.");
//                                                 ===>FIN<===