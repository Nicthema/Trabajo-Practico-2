
// const precioMaquina = componente => {
//     let precioTotal = 0;
//     const precio = precioComponente => precioComponente.componente === componente;
//     const precioFilter = local.precios.filter(precio);
//     precioTotal+= local.precios.componente;

//     return precioTotal;
// }

let componente = [];

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

console.log(precioMaquina(['Motherboard ASUS 1500', 'Motherboard ASUS 1500']));

const vendedoraDelMes = (mes, anio) => {

}

const ventasVenderora = nombre => {

}

const huboVentas = (mes, anio) => {

}