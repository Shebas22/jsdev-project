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
            return `✅ Confirmamos el pago de $ ${this.totalCompra()} \n Muchas gracias por su compra!`;
        } else {
            return "⛔️ Error en la transacción";
        }
    }
}