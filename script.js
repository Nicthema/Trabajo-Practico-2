var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
  
    precios: [
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
  };
  

  
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
  
  // const ventasMes = (mes, anio) => {
  
  //     return ventasUnMes;
  //   }
  // }

  
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