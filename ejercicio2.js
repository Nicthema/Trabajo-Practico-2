
for(const sucursales of local.ventas) {
    sucursales.sucursal = "Centro";
}

local.surcursales = ['Centro', 'Caballito'];

// 12/02/2019 es new Date(2019, 1, 12)

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
        componentes:  ['Monitor GPRS 3000', 'RAM Quinston Fury'],
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

for(const objects of agregarObjetosNuevos) {
    local.ventas.push(objects);
}

