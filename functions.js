/* ***********************************************************************************************
1.1 precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
*********************************************************************************************** */

const precioMaquina = (componente) => {
    let precioTotal = 0;
    for (const componentes of componente) {
        for (const precio of local.precios) {
            if (componentes === precio.componente) {
                precioTotal += precio.precio;
            }
        }
    }
    return precioTotal;
}

// console.log(precioMaquina(['Motherboard ASUS 1500', 'Motherboard ASUS 1500']));


/* ***********************************************************************************************
1.2 cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.
*********************************************************************************************** */

const cantidadVentasComponente = componente => {
    let cantidadComponentes = 0;
    for (const venta of local.ventas) {
        for (const componentes of venta.componentes) {
            if (componente === componentes) {
                cantidadComponentes++;
            }
        }
    }
    return cantidadComponentes;
}

// console.log(cantidadVentasComponente('Monitor ASC 543'));


/* ***********************************************************************************************
1.3 vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*********************************************************************************************** */

// const vendedoraDelMes = (mes, anio) => {

// }

/*
Filtrar todas las ventas por mes y anio
Por cada una de las vendedoras: filtrar las ventas que hizo esa vendedora

Por cada una de esas ventas, llamamos a precioMaquina y le pasamos los componentes de cada venta y vamos sumando cada uno de los totales de cada venta.

A medida que obtenemos el total de una vendedora, lo vamos guardando en una variable y comprando con el valor anterior.
*/

// console.log(vendedoraDelMes(1, 2019)); 


/* ***********************************************************************************************
 1.4 ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre). 
 *********************************************************************************************** */

const ventasMes = (mes, anio) => {
    let ventasUnMes = 0;
    const ventasPorMes = local.ventas.filter(venta => venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio)
    for (const venta of ventasPorMes) {
        ventasUnMes += precioMaquina(venta.componentes);
    }
    return ventasUnMes;
}

// console.log(ventasMes(1, 2019));


/* ***********************************************************************************************
1.5 ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
*********************************************************************************************** */

const ventasVendedora = nombre => {
    let total = 0;
    for (const venta of local.ventas) {
        if (venta.nombreVendedora === nombre) {
            total += precioMaquina(venta.componentes);
        }
    }
    return total;
}

// console.log(ventasVendedora('Grace'));


/* ***********************************************************************************************
1.6 componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
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

// console.log(componenteMasVendido());


/* ***********************************************************************************************
1.7 huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*********************************************************************************************** */

// const huboVentas = (mes, anio) => {
    
// }

// console.log(componenteMasVendido(3, 2019));


/* ***********************************************************************************************
2.3 Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
*********************************************************************************************** */

const ventasSucursal = sucursal => {
    let ventasTotales = 0;
    for (const venta of local.ventas) {
        if (venta.sucursal === sucursal) {
            ventasTotales += precioMaquina(venta.componentes);
        }
    }
    return ventasTotales;
}

// console.log(ventasSucursal('Centro'));


/* ***********************************************************************************************
Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?
*********************************************************************************************** */

const ventasTotales = (nombre) => {
    let total = 0;
    for (const venta of local.ventas) {
        if (venta.sucursal === nombre || venta.nombreVendedora === nombre) {
            total += precioMaquina(venta.componentes);
        }
    }
    return total;
}

// console.log(ventasTotales('Centro'));
// console.log(ventasTotales('Grace'));


/* ***********************************************************************************************
2.4 Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*********************************************************************************************** */


// console.log(sucursalDelMes());


/* ***********************************************************************************************
3.1 renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
*********************************************************************************************** */

// console.log(renderPorMes());


/* ***********************************************************************************************
3.2 renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
*********************************************************************************************** */

const renderPorSucursal = () => {
    let lista = '';
    let total = 0;
    for (const sucursal of local.sucursales) {
        total = ventasTotales(sucursal);
        lista += `Total de ${sucursal}: ${total}
`;
    }
    return lista;
}

// console.log(renderPorSucursal());


/* ***********************************************************************************************
3.3 render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó
*********************************************************************************************** */

const render = () => {
    let porMes = renderPorMes();
    let porSucursal = renderPorSucursal();

    return `Reporte:
    Ventas por mes:
    ${porMes}
    Ventas por Sucursal:
    ${porSucursal}
    Producto estrella: 
    Vendedora que más ingresos generó: `;
}

// console.log(render());

