import Precio from "./precio.js"
export default class Pedido{
    constructor(fecha, hora, cliente){
        this.fechas = fecha
        this.horas = hora
        this.clientes = cliente
        this.elementoPedidos = Array()
    }
    agregarElemento(elemento){
        this.elementoPedidos.push(elemento)
    }
    getNumeroProductos(){
        let productos = 0;
        this.elementoPedidos.forEach((elemento, i) => {
            productos = productos + elemento.cantidades
        })
        return `${productos}`
    }
    getCostoTotal(){
        let a = 0
        this.elementoPedidos.forEach((elemento) => {
            a = (a + (elemento.productos.precios.valores * elemento.cantidades))
        })
        a = new Precio(a)
        return `${a.getPrecio()}`
    }
    listarElemeto(){
        this.elementoPedidos.forEach((elemento, i) => {
            console.log(`(${i + 1}) - ${elemento.getDescripccion()}`)
        })
    }
    getNumeroElementos(){
        let array = Array()
        this.elementoPedidos.forEach((elemento, i) => {
        array[i] = elemento[i]
        })
        return `${array.length}`
    }
    getResumen(){
        return `${this.fechas.getFecha()} ${this.horas.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos - total ${this.getCostoTotal()}`;
    }
}