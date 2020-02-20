import Precio from "./precio.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"
import Cliente from "./cliente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"
import Direccion from "./direccion.js"

class Main{
    constructor(){
        this.valores = new Precio(127.50)
        this.tiempos = new Tiempo(5,30,"PM")
        this.fechas = new Fecha(30,4,2001)
    }
    getPrecio(){
        console.log(`${this.valores.getPrecio()}`)
    }
    getTiempo(){
        console.log(`${this.tiempos.getFormato12()}`)
        console.log(`${this.tiempos.getFormato24()}`)
    }
    getFecha(){
        console.log(`Año ${this.fechas.getAños()}`)
        console.log(`Meses ${this.fechas.getMeses()}`)
        console.log(`Semanas ${this.fechas.getSemanas()}`)
        console.log(`Días ${this.fechas.getDias()}`)
        console.log(`Fecha ${this.fechas.getFecha()}`)
        console.log(`Día ${this.fechas.getDiaFecha()}`)
    }
}
let app = new Main()
app.getFecha()