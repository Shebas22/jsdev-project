// CLASE COMPRA

class Compra {
    constructor(carrito) {
        this.carrito = carrito;
    }

    // Devuelve el total de la compra
    totalCompra() {
            return this.carrito.totalCarrito();
    }

    // Envia la confirmación de compra por pantalla
    comprar(estado) {
        let total = this.totalCompra();
        if (total) {
            return (estado === 'confirmar') ? {transaccion:'success',
                    mensaje:`Confirmamos el pago de $${this.totalCompra()}. Muchas gracias por su compra!`, 
                    titulo:'Completado'} : {transaccion:'question',
                                            mensaje:`El monto total es de $${this.totalCompra()}. Desea finalizar la compra?`, 
                                            titulo:'Finalizar compra'};
        } else {
            return {transaccion:'error',mensaje:"Error en la transacción", titulo:'Algo salió mal'};
        }
    }
}