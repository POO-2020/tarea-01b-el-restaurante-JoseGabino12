export default class Pedido{
    constructor(fecha, hora, cliente, elementoPedido){
        this.fechas = fecha
        this.horas = hora
        this.clientes = cliente
        this.elementoPedidos = elementoPedido
        console.log("Objeto Inicializado")
    }
    getResumen(){
        return `${this.fechas.getFecha()} ${this.horas.getFormato12()} ${this.elementoPedidos.cantidades} `
    }
    getNumeroElementos(){

    }
    getNumeroProductos(){

    }
    getCostoTotal(){

    }
    agregarElemento(){

    }
    listarElemeto(){

    }
}