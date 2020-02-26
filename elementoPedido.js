import Precio from "./precio.js"
export default class elementoPedido{
    /**
     * 
     * @param {string} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad){
        this.productos = producto
        this.cantidades = cantidad
    }
    getDescripccion(){
        return `${this.cantidades} x ${this.productos.nombres} = ${this.productos.precios.valores*this.cantidades}`
    }
}