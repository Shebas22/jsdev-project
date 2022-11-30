// DOM Shop

const carrito = new Carrito(recuperarCarrito());
const selectorShop = document.querySelector("div.listarTienda");
const selectorFilter = document.querySelector("#datalistOptions");
const selectorFilterInput = document.querySelector("#dataList");
const selectorFilterCategory = document.querySelector("#dataCategory");

// Funciones de la pagina

// Llamada del evento para filtrar los productos
const updateValue = e => {
    let valor = e.target.value;
    (valor)?cargarTienda(filtrar(catalogo,valor)):cargarTienda(catalogo);
    activeClickShopAdd();
}

const filtrar = (array,valor) => {
    let resultado = [];
    array.forEach(producto => {
        if(JSON.stringify(producto).includes(valor)){
            resultado.push(producto);
        }
    });
    return (resultado)?resultado:catalogo;
}

selectorFilterInput.addEventListener('input', updateValue);
selectorFilterCategory.addEventListener('change', updateValue);

// Genera las cards de la tienda
const cargarTienda = array => {
    let shopHTML ="";
    let filtroHTML="";
    if(array.length >0){
        array.forEach(producto =>{
            shopHTML += cargarProductos(producto);
            filtroHTML += `<option value="${producto.nombre}"></option>`;
        });
    }else{
        shopHTML = `<h2 class="btn p-4 text-center">No se encuentran productos</h2>`;
    }
    selectorShop.innerHTML = shopHTML;
    selectorFilter.innerHTML = filtroHTML;
}

// Asigna los eventos a los botones
const activeClickShopAdd = () =>{
    const addButton = document.querySelectorAll("button.btn.cart-add")
    addButton.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            const inputAmount = document.getElementById(`i${e.currentTarget.id}`);
            let cantidad = parseInt(inputAmount.value);
            let resultado = buscarProducto(e.currentTarget.id);
            resultado.cantidad = cantidad;
            (cantidad!==0)?carrito.agregarProducto(resultado):carrito.quitarProducto(resultado);
            console.clear();
            carrito.mostrarProductos();
        });
    });
}

// Carga inicial de los productos
cargarTienda(catalogo);
activeClickShopAdd();
