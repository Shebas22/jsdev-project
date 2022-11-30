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
    confirmarCompra() {
        let total = this.totalCompra();
        if (total) {
            return {transaccion:'success',mensaje:`Confirmamos el pago de $${this.totalCompra()}. Muchas gracias por su compra!`};
        } else {
            return {transaccion:'error',mensaje:"Error en la transacción"};
        }
    }
}