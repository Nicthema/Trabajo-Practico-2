// 1. precioMaquina(); Peu

const precioMaquina = (componente) => {
    let precioTotal = 0;
    for (const component of componente) {
        for (const precio of local.precios) {
            if (component === precio.componente) {
                precioTotal += precio.precio;
            }
        }
    }

    return precioTotal;
}

console.log(precioMaquina(['Motherboard ASUS 1500', 'Motherboard ASUS 1500']));

// 2. cantidadVentasComponente(); Leri

// const cantidadVentasComponente = componente => {
//     let cantidadComponentes = 0;

//     for (const venta of local.ventas) {
//       for (const comp of venta.componentes) {
//         if (componente === comp) {
//           cantidadComponentes++;
//         }
//       }
//     }

//     return cantidadComponentes;
//   }

// 3. vendedoraDelMes(); Peu


// 4. ventasMes(); Leri

const ventasMes = (mes, anio) => {
    let ventasUnMes = 0;
    const ventasPorMes = local.ventas.filter(venta => venta.fecha.getMonth() === mes - 1 && venta.fecha.getFullYear() === anio)
    for (const venta of ventasPorMes) {
        ventasUnMes += precioMaquina(venta.componentes);
    }
    return ventasUnMes;
}
// 5. ventasVendedora(); Peu

const ventasVendedora = nombre => {
    let total = 0;
    for(const venta of local.ventas) {
        if(venta.nombreVendedora === nombre) {
            total+= precioMaquina(venta.componentes);
        }
        
    }
    return total;
}

console.log(ventasVendedora('Grace'));

// 6. componenteMasVendido(); Leri

// const componenteMasVendido = () => {
//     let componenteActual = "";

//     for (const venta of local.ventas) {
//       for (const componente of venta.componentes) {
//         if (cantidadVentasComponente(componente) > cantidadVentasComponente(componenteActual)) {
//           componenteActual = componente;
//         }
//       }
//     }

//     return componenteActual;
//   }

// 7. huboVentas(); Peu && Leri

const huboVentas = (mes, anio) => {

}