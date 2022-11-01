
// FUNCION PRINCIPAL

function simularCompra(){
    let salir = false;
    let total = 0;
    let producto = 0;
    let precio = 0;
    // Bucle principal de compra
    do{
        producto = ingresaProducto();
        precio = buscaPrecio(producto);
        // Verifica producto ingresado
        if(precio){
            let valor = ingresaCantidad(producto,precio);
            total = total +(valor);
            console.log(producto+": $"+precio+" - $"+""+valor);
            console.log("Subtotal: $"+total);
        }else{
            alert("Por favor ingrese un producto válido");
        }
        // Consulta de si continua la compra
        salir = !confirm("Desea seguir comprando");
    }while(!salir);
    alert("Compra finalizada."+"\n"+"El total de la compra es: $" +total.toFixed(2));
    console.log("Total: $"+total);
}

// FUNCION INGRESA PRODUCTO
// Solicita ingresar producto

function ingresaProducto(){
    let producto = prompt("Ingrese el producto que desea comprar");
    // Verifica si le dio cancelar
    if(producto)
        return producto.toLowerCase();
    return 0;
}

// FUNCION BUSCAPRECIO
// Recibe String producto y devuelve el precio

function buscaPrecio(producto){
    // Switch de precios
    switch(producto){
        case 'uva':
            return uva;
        break;

        case 'frutilla':
            return frutilla;
        break;

        case 'sandia':
            return sandia;
        break;

        case 'naranja':
            return naranja;
        break;

        case 'pera':
            return pera;
        break;

        case 'banana':
            return banana;
        break;

        case 'manzana':
            return manzana;
        break;

        case 'durazno':
            return durazno;
        break;

        case 'papa':
            return papa;
        break;

        case 'tomate':
            return tomate;
        break;

        case 'cebolla':
            return cebolla;
        break;

        case 'zanahoria':
            return zanahoria;
        break;

        case 'aji':
            return aji;
        break;

        case 'berenjena':
            return berenjena;
        break;

        case 'choclo':
            return choclo;
        break;

        case 'ajo':
            return ajo;
        break;
        // Si el producto es inválido envia error a la consola
        default:
            console.error("producto invalido");
            return false;
        break;
    }
}

// FUNCION INGRESACANTIDAD
// Recibe String producto e Int precio, solicitando el ingreso de la cantidad

function ingresaCantidad(producto, precio){
    let cantidad;
    // Bucle de validación cantidad
    do{
        cantidad = parseFloat(prompt(producto + " X Kg: $ " + precio + "\n"+
                                        "Ingrese la cantidad del producto"));
    }while(isNaN(cantidad));
    return cantidad*precio;
}

