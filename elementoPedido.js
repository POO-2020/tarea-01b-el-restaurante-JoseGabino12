import Precio from "./precio.js"
var suma
export default class elementoPedido{
    /**
     * 
     * @param {string} producto 
     * @param {number} cantidad 
     * @param {number} precio
     */
    constructor(producto, cantidad, precio){
        this.productos = producto
        this.cantidades = cantidad
        this.precios = precio
    }
    getDescripccion(){
        suma = (parseInt(this.cantidades) + parseInt(this.precios.getPrecio()))
        return `${this.cantidades} x ${this.productos.getDescripcion()} ${parseFloat(this.precios.getPrecio()) + 10.10}`
    }
}