export default class Precio{
    constructor(valor){
        this.valor = valor
    }
    getPrecio(){
        return `$${parseFloat(this.valor)}`
    }
}