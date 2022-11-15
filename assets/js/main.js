carrito = new Carrito();

// FUNCION PRINCIPAL

function comprar(){
    let productoSel = buscarProducto(ingresaProducto());
    if(productoSel){
        carrito.agregarProducto(ingresaCantidad(productoSel));
    }else{
        alert("Producto inválido");
    }
    console.warn("Subtotal de la compra: $"+carrito.totalCarrito());
    if (confirm("¿Seguir comprando?")) {
        comprar();
    } else {
        if (!carrito.cantidadProductos()) {
            return 0;
        }
        if(confirm("¿Finalizar compra?")){
            finalizarCompra();
        }
    }
}

// FUNCION INGRESA PRODUCTO
// Solicita ingresar producto

function ingresaProducto(){
    let producto = prompt("Ingrese el producto que desea comprar");
    // Verifica si le dio cancelar
    if(producto)
        return producto.toLowerCase();
    return 0;
}

// FUNCION BUSCA PRODUCTO
// Busca el producto en el catalogo y devuelve el objeto Producto

function buscarProducto(nombreProducto){
    let resultado = catalogo.find(producto => producto.nombre.toLowerCase() === nombreProducto);
    if(resultado){
        return new Producto(resultado);
    }
        return 0;
}

// FUNCION INGRESA CANTIDAD
// Solicita ingresar cantidad de producto

function ingresaCantidad(producto){
    let valor;
    // Bucle de validación cantidad
    do{
        valor = parseFloat(prompt(producto.nombre + " X Kg: $ " + producto.precio + "\n"+
                                        "Ingrese la cantidad del producto"));
    }while(isNaN(valor));
    producto.cantidad = valor;
    return producto;
}

// FUNCION FINALIZA COMPRA
// Muestra el total de la compra y finaliza la compra propiamente dicha, confirmando el pago y vaciando el carrito

function finalizarCompra() {
    // Valida carrito vacio
    if (carrito.cantidadProductos() === 0) {
        console.warn("El carrito está vacío!");
        return 0;
    }
    //Instancia de Compra
    const compra = new Compra(carrito);
    alert(`El costo total es de $ ${compra.totalCompra()}`)
    let respuesta = confirm("¿Deseas confirmar tu pago?")
        if (respuesta) {
            alert(compra.confirmarCompra());
            carrito.vaciarCarrito();
        }
}

// FUNCION MOSTRAR CARRITO
// Muestra en consola el carrito en forma de tabla

function mostrarCarrito(){
    carrito.mostrarProductos();
}
