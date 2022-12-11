// Cambio de tema de sweetalert
{
    const ss = document.createElement('link');
    ss.rel = "stylesheet";
    ss.href = "//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css";
    document.head.appendChild(ss);
}

// Funciones de la pagina

// Cargar carrito
const actualizarTabla = () =>{
    cargarCarrito(carrito.array())
    .then((result) => activeClickCartRemove())
    .catch(error =>  selectorError.innerHTML = errorMensaje('cart'));
}


// Vaciar carrito
const vaciarCarrito = () =>{
    carrito.vaciarCarrito();
    actualizarTabla();
}


// Finalizar la compra
const finalizarCompra = () => {
    //Instancia de Compra
    const compra = new Compra(carrito);
    let estado = compra.comprar('finalizar');
    alerta('', '', estado.transaccion, '', estado.titulo, estado.mensaje,true )
    .then((result) => {
        if (result.isConfirmed) {
            estado = compra.comprar('confirmar')
            alerta('', '', estado.transaccion, '', estado.titulo, estado.mensaje,'')
            .then((result)=>{
                vaciarCarrito();
            })
        }
    })
}

// Carga y genera la tabla con los productos en el carrito
const cargarCarrito = array => {
    let cartHTML ="";
    selectorLoad.classList.remove("d-none");
    return new Promise((resolve,reject)=> {
            setTimeout(() => {
                selectorLoad.classList.add("d-none");
                if(array.length > 0){
                    array.forEach(producto => cartHTML += cargarTabla(producto));
                    selectorTot.innerHTML = cargarCompra(carrito.totalCarrito());
                    const selectorEnd = document.querySelector("button.finalizar");
                    const selectorVac = document.querySelector("button.vaciar");
                    selectorEnd.addEventListener('click',finalizarCompra);
                    selectorVac.addEventListener('click',vaciarCarrito);
                }else{
                    selectorTot.innerHTML = "";
                    reject();
                }
                selectorCart.innerHTML = cartHTML;
                resolve(true);
            }, 500) 
    })
}


// Asigna los botones
const activeClickCartRemove = () =>{
    const addButton = document.querySelectorAll("button.btn.cart-remove")
    addButton.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            let resultado = buscarCarrito(e.currentTarget.id);
            carrito.quitarProducto(resultado);
            actualizarTabla();
        });
    });
}


// Cargar la tabla con los productos del carrito
actualizarTabla();

