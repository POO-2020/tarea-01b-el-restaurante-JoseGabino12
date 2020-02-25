export default class Precio{
    constructor(valor){
        this.valores = valor
    }
    getPrecio(){
        return `$${parseFloat(this.valores)}`
    }
}