// Plantillas

// Carga productos del shop
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
                                <p class="catalogo__card-p"><b>$${producto.precio}</b></p>
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

// Carga productos del carrito
const cargarTabla = (producto)=>{
    return `<tr>
                <td class="d-none d-md-block"><img src=${producto.imagen} alt=${producto.nombre} width="45px"></td>
                <td>${producto.nombre.toUpperCase()}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td><button class="btn cart-remove" id="${producto.codigo}"><img src="../assets/img/remove-from-cart.png" alt="" width="30px"></button></td>
            </tr>`;
    
}

// Carga apartado de finalizar compra
const cargarCompra = (total) => {
    return `<div class="finalizarCompra container text-center p-4">
                <h2>Total del carrito</h2>
                <table class="table table-success table-striped-columns p-4">
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>$${total}</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-success finalizar m-2">Finalizar compra</button>
                <button class="btn btn-warning vaciar m-2">Vaciar carrito</button>
            </div>`;
}

// Mensajes de error
const errorMensaje = (valor) => {
    const error = { servidor: `<h2 class="p-4 text-center error text-dark">😰 Error al cargar los datos del servidor</h2>`,
                    shop: `<h2 class="p-4 text-center error text-dark">🥱 No encontramos productos disponibles</h2>`,
                    cart: `<h2 class="p-4 text-center error text-dark">🥱 No encontramos productos en el carrito</h2>`}
    return error[valor];
}
