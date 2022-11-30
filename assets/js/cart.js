// DOM Cart

const carrito = new Carrito(recuperarCarrito());
const selectorCart = document.querySelector("tbody.listarCarrito");
const selectorTot = document.querySelector("div.finalizarCompra");

// Funciones de la pagina

// Finalizar la compra
const finalizarCompra = () => {
    //Instancia de Compra
    const compra = new Compra(carrito);
    alerta(toast, 0, 'success', 'center', 'Compra Confirmada', compra.confirmarCompra());
    carrito.vaciarCarrito();
    cargarCarrito(carrito.array());
    activeClickCartRemove();
}

// const finalizarCompra = () => {
//     //Instancia de Compra
//     const compra = new Compra(carrito);
//     alerta(toast, 0, 'success', 'center', 'Compra Confirmada', compra.confirmarCompra() );
//     alert(`El costo total es de $ ${compra.totalCompra()}`)
//     let respuesta = confirm("¿Deseas confirmar tu pago?")
//         if (respuesta) {
//             alert(compra.confirmarCompra());
//             carrito.vaciarCarrito();
//             cargarCarrito(carrito.array());
//             activeClickCartRemove();
//         }
// }

// Carga y genera la tabla con los productos en el carrito
const cargarCarrito = array => {
    let cartHTML ="";
    if(array.length >0){
        array.forEach(producto => cartHTML += cargarTabla(producto));
        selectorTot.innerHTML = cargarCompra(carrito.totalCarrito());
        const selectorEnd = document.querySelector("button.finalizar");
        selectorEnd.addEventListener('click',finalizarCompra);
    }else{
        cartHTML = `<h2 class="btn p-4 text-center">No hay productos en el carrito</h2>`;
        selectorTot.innerHTML = "";
    }
    selectorCart.innerHTML = cartHTML;
}

// Asigna los botones
const activeClickCartRemove = () =>{
    const addButton = document.querySelectorAll("button.btn.cart-remove")
    addButton.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            let resultado = buscarProducto(e.currentTarget.id);
            carrito.quitarProducto(resultado);
            console.clear();
            carrito.mostrarProductos();
            cargarCarrito(carrito.array());
            activeClickCartRemove();
        });
    });
}


// Cargar la tabla con los productos del carrito
cargarCarrito(carrito.array());
activeClickCartRemove();