export default class Producto{
    constructor(nombre, precio){
        this.nombres = nombre
        this.precios = precio
    }
    getDescripcion(){
        return `${this.nombres} ${this.precios.getPrecio()}`
    }
}