// CLASE CARRITO

class Carrito{
    constructor(productos){
        this.productos = productos;
    }
    
        // Vacia carrito
        vaciarCarrito(){
            this.productos.length = 0;
            guardarCarrito();
            toast(`Se vació el carrito`);
        }

    // Agrega productos al carrito, si ya se encuentra modifica la cantidad del mismo
    agregarProducto(producto) {
        let index = this.productos.findIndex(valor => valor.codigo === producto.codigo);
        if(index < 0){
            this.productos.push(producto);
            toast(`Se agregó ${producto.nombre} al carrito`);
        }else{
            this.productos[index].cantidad = producto.cantidad;
        }
        guardarCarrito();
    }

    // Quita productos del carrito
    quitarProducto(producto) {
        let index = this.productos.findIndex(valor => valor.codigo === producto.codigo);
        if(index >= 0){
            this.productos.splice(index,1);
            toast(`Se quitó ${producto.nombre} del carrito`);
        }
        guardarCarrito();
    }

    // Muestra contenido del carrito en consola
    mostrarProductos(){
        if (this.productos.length > 0) {
            console.table(this.productos);
            return this.productos;
        } else {
            console.warn("El carrito está vacío!");
            return 0;
        }
    }

    // Devuelve cantidad de productos en el carrito
    cantidadProductos(){
        return this.productos.length;
    }

    // Devuelve el array de productos en el carrito
    array(){
        return this.productos;
    }

    // Devuelve el costo total del carrito
    totalCarrito(){
        if (this.productos.length > 0) {
            return this.productos.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad), 0).toFixed(2)
        } else {
            return 0;
        }
    }

}