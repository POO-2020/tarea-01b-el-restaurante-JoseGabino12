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
        let total = 0
        this.elementoPedidos.forEach((elemento) => {
            total = (total + (elemento.productos.precios.valores * elemento.cantidades))
        })
        total = new Precio(total)
        return `${total.getPrecio()}`
    }
    listarElemeto(){
        this.elementoPedidos.forEach((elemento, i) => {
            console.log(`(${i + 1}) - ${elemento.getDescripccion()}`)
        })
    }
    getNumeroElementos(){
        let numeroDeElementos
        this.elementoPedidos.forEach((elemento, i) => {
            numeroDeElementos = numeroDeElementos + 1
        })
        return `${numeroDeElementos}`
    }
    getResumen(){
        return `${this.fechas.getFecha()} ${this.horas.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos - total ${this.getCostoTotal()}`;
    }
}