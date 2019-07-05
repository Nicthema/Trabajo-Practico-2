/* ***********************************************************************************************
2.1 En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original). 
Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
*********************************************************************************************** */

for (const sucursales of local.ventas) {
    sucursales.sucursal = "Centro";
}

local.sucursales = ['Centro', 'Caballito'];

/* ***********************************************************************************************
2.2 Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal
*********************************************************************************************** */

let agregarObjetosNuevos = [
    {
        fecha: new Date(2019, 01, 12),
        nombreVendedora: 'Hedy',
        componentes: ['Monitor GPRS 3000', 'HDD Toyiva'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 24),
        nombreVendedora: 'Sheryl',
        componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'],
        sucursal: 'Caballito'
    },
    {
        fecha: new Date(2019, 01, 01),
        nombreVendedora: 'Ada',
        componentes: ['Motherboard MZI', 'RAM Quinston Fury'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 11),
        nombreVendedora: 'Grace',
        componentes: ['Monitor ASC 543', 'RAM Quinston'],
        sucursal: 'Caballito'
    },
    {
        fecha: new Date(2019, 01, 15),
        nombreVendedora: 'Ada',
        componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 12),
        nombreVendedora: 'Hedy',
        componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'],
        sucursal: 'Caballito'
    },
    {
        fecha: new Date(2019, 01, 21),
        nombreVendedora: 'Grace',
        componentes: ['Motherboard MZI', 'RAM Quinston'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 08),
        nombreVendedora: 'Sheryl',
        componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 16),
        nombreVendedora: 'Sheryl',
        componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 27),
        nombreVendedora: 'Hedy',
        componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'],
        sucursal: 'Caballito'
    },
    {
        fecha: new Date(2019, 01, 22),
        nombreVendedora: 'Grace',
        componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 05),
        nombreVendedora: 'Ada',
        componentes: ['Motherboard ASUS 1500', 'RAM Quinston'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 01),
        nombreVendedora: 'Grace',
        componentes: ['Motherboard MZI', 'HDD Wezter Dishital'],
        sucursal: 'Centro'
    },
    {
        fecha: new Date(2019, 01, 07),
        nombreVendedora: 'Sheryl',
        componentes: ['Monitor GPRS 3000', 'RAM Quinston'],
        sucursal: 'Caballito'
    },
    {
        fecha: new Date(2019, 01, 14),
        nombreVendedora: 'Ada',
        componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'],
        sucursal: 'Centro'
    }


]

for (const objects of agregarObjetosNuevos) {
    local.ventas.push(objects);
}



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

const ventasTotales = (x) => {
    let ventasTotales = 0;
    for (const venta of local.ventas) {
        if (venta.sucursal === x || venta.nombreVendedora === x) {
            ventasTotales += precioMaquina(venta.componentes);
        }
    }
    return ventasTotales;
}

// console.log(ventasTotales('Centro'));
// console.log(ventasTotales('Grace'));


/* ***********************************************************************************************
2.4 Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
*********************************************************************************************** */