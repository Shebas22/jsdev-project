// LocalStorage
const recuperarCarrito = () =>{
    return JSON.parse(localStorage.getItem("GauchitoCarrito")) || [];
    }

const guardarCarrito = () =>{
    if(carrito.cantidadProductos() >= 0){
        localStorage.setItem("GauchitoCarrito", JSON.stringify(carrito.array()));
    }
}

// Funciones comunes a las páginas y plantillas

const buscarProducto = (codigo) => catalogo.find(producto => producto.codigo === parseInt(codigo));
const buscarCarrito = (codigo) => carrito.array().find(producto => producto.codigo === parseInt(codigo));


const cargarProductos = (producto)=>{
    let resultado = buscarCarrito(producto.codigo);
    let valor = 0;
    if(resultado){
        valor = resultado.cantidad || '0';
    }
    return `<div class="container text-center p-4 animated fadeInUp">
                <div class="row">
                    <div class="col-sm-4">
                        <img class="p-2 img-fluid catalogo__card-img" src=${producto.imagen} alt="${producto.nombre}">
                    </div>
                    <div class="col-sm-8 align-middle m-auto">
                        <div class="row">
                            <div class="col-sm-6 m-auto">
                                <h2 class="catalogo__card-h2">${producto.nombre.toUpperCase()}</h2>
                                <p class="catalogo__card-p">por ${producto.frac}</p>
                            </div>
                            <div class="col-sm-6 m-auto">
                                <p>Cantidad</p>
                                <input class="m-auto text-center bg-dark text-light" id="i${producto.codigo}" type="number" min="0" max="100" step="1" value="${valor}"/>
                                <button class="btn cart-add" id="${producto.codigo}"><img src="../assets/img/add-to-cart.png" alt="" width="35px"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <hr>`;
    
}


const cargarTabla = (producto)=>{
    return `<tr>
                <td class="d-none d-md-block"><img src=${producto.imagen} alt=${producto.nombre} width="45px"></td>
                <td>${producto.nombre.toUpperCase()}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td><button class="btn cart-remove" id="${producto.codigo}"><img src="../assets/img/remove-from-cart.png" alt="" width="30px"></button></td>
            </tr>`;
    
}

const cargarCompra = (total) => {
    return `<div class="finalizarCompra container text-center">
                <h2>Total del carrito</h2>
                <table class="table table-success table-striped-columns p-4">
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>$${total}</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-success finalizar">Finalizar compra</button>
            </div>`;
}


// Alertas toastify
const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: { background: bgcolor || 'green', fontSize: '24px'}
        }).showToast();
}

const alerta = (toast, timer, icon, position, title, text )=> {
    Swal.fire({
        toast: toast || false, 
        position: position || 'center', // top-end, bottom-end, top-start, center
        icon: icon || 'info',     //success, warning, error, question, info
        title: title || '',
        text: text || '',
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
        timer: timer
    })
}