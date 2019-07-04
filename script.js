const precioMaquina = (componente) => {
    let precioTotal = 0;
    for(const component of componente) {
        for(const precio of local.precios) {
            if(component === precio.componente) {
            precioTotal += precio.precio;
            }
        }
    }
    
  return precioTotal;
}

/* ***********************************************************************************************
2. cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.
*********************************************************************************************** */


const cantidadVentasComponente = componente => {
    let cantidadComponentes = 0;

    for (const venta of local.ventas) {
        for (const comp of venta.componentes) {
            if (componente === comp) {
                cantidadComponentes++;
            }
        }
    }

    return cantidadComponentes;
}

/* ***********************************************************************************************
 4.ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre). 
 *********************************************************************************************** */

const ventasMes = (mes, anio) => {
    let ventasUnMes = 0;
    const ventasPorMes = local.ventas.filter(venta => venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio)
    for (const venta of ventasPorMes) {
        ventasUnMes += precioMaquina(venta.componentes);
    }
    return ventasUnMes;

}


/* ***********************************************************************************************
6. componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
*********************************************************************************************** */

const componenteMasVendido = () => {
    let componenteActual = "";

    for (const venta of local.ventas) {
        for (const componente of venta.componentes) {
            if (cantidadVentasComponente(componente) > cantidadVentasComponente(componenteActual)) {
                componenteActual = componente;
            }
        }
    }

    return componenteActual;
}







// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

const renderPorMes = () => {

}

