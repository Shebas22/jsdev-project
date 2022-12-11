// DOM Shop
const catalogo = [];
const rutaServidor = 'https://6396269e90ac47c6807eea54.mockapi.io/api/bbdd/productos';
const rutaLocalbbdd = '../bbdd/bbdd.json';

// Obtener datos Servidor / BBDD local

    fetch(rutaServidor) // rutaLocalbbdd o rutaServidor
        .then((respuesta)=> productos = respuesta.json())
        .then((productos) => catalogo.push(...productos))
        .then(() => cargarTienda(catalogo))
        .then(()=> activeClickShopAdd())
        .catch(() => {
                selectorShop.innerHTML = errorMensaje('servidor')   
                    selectorShop.innerHTML += "Cargando productos desde la base de datos local"  
                    fetch(rutaLocalbbdd) // rutaLocalbbdd o rutaServidor
                    .then((respuesta)=> productos = respuesta.json())
                    .then((productos) => catalogo.push(...productos))
                    .then(() => cargarTienda(catalogo))
                    .then(()=> activeClickShopAdd())
                    .catch(error => selectorShop.innerHTML = errorMensaje('servidor'))
                    resolve(productos);
            })


// Funciones de la pagina

// Llamada del evento para filtrar los productos
const updateValue = e => {
    let valor = e.target.value.toLowerCase();
    if(valor){
        cargarTienda(filtrar(catalogo,valor))
        .then((result) => activeClickShopAdd())
        .catch(error => selectorShop.innerHTML = errorMensaje('shop'));
    }else{
        cargarTienda(catalogo)
        .then((result) => activeClickShopAdd())
        .catch(error => selectorShop.innerHTML = errorMensaje('shop'));
    }
}

const filtrar = (array,valor) => {
    let resultado = [];
    array.forEach(producto => {
        if(JSON.stringify(producto.nombre+producto.categoria).includes(valor)){
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
    selectorLoad.classList.remove("d-none");
    return new Promise((resolve,reject)=> {
            setTimeout(() => {
                selectorLoad.classList.add("d-none");
                if(array.length <= 0){
                    reject();
                }
                array.forEach(producto =>{
                    shopHTML += cargarProductos(producto);
                    filtroHTML += `<option value="${producto.nombre}"></option>`;
                });
                selectorShop.innerHTML = shopHTML;
                selectorFilter.innerHTML = filtroHTML;
                resolve(true);
            }, 500) 
    })
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
            // console.clear();
            // carrito.mostrarProductos();
        });
    });
}


