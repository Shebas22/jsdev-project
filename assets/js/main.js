// Funciones comunes a las páginas y plantillas

const recuperarCarrito = () =>{
    return JSON.parse(localStorage.getItem("GauchitoCarrito")) || [];
    }

const guardarCarrito = () =>{
    if(carrito.cantidadProductos() >= 0){
        localStorage.setItem("GauchitoCarrito", JSON.stringify(carrito.array()));
    }
}

// Recuperar carrito
const carrito = new Carrito(recuperarCarrito());

// Funciones de búsqueda
const buscarProducto = (codigo) => catalogo.find(producto => producto.codigo === parseInt(codigo));

const buscarCarrito = (codigo) => carrito.array().find(producto => producto.codigo === parseInt(codigo));

// ALERTAS

const toast = (text)=> {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: { background: "linear-gradient(to left, #0c0f12, #495c6e)", fontSize: '20px'}
        }).showToast();
}

const alerta = (toast, timer, icon, position, title, text, cancelB )=> {
    return new Promise((resolve)=> {
    Swal.fire({
        toast: toast || false, 
        position: position || 'center', // top-end, bottom-end, top-start, center
        icon: icon || 'info',     //success, warning, error, question, info
        title: title || '',
        text: text || '',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        showCancelButton: cancelB || false,
        cancelButtonText: 'Seguir comprando',
        timer: timer
    }).then((result)=>{
        resolve(result);
    })
})
}