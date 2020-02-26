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
        this.valores2 = new Precio(80.50)
        this.tiempos = new Tiempo(5,30,"PM")
        this.fechas = new Fecha(30,4,2001)
        this.domicilios = new Direccion("Porfirio Gaytan", 362, 0, "Juan José Rios 2", 28984, "Colima", "Villa de Alvarez")
        this.clientes = new Cliente("José Gabino Morales González", this.domicilios, 3123194899)
        this.productos = new Producto("Pizza Americana", this.valores)
        this.productos2 = new Producto("Torta Hawaiana", this.valores2)
        this.elementosPedidos = new ElementoPedido(this.productos, 3)
        this.elementosPedidos2 = new ElementoPedido(this.productos2, 2)
        this.pedidos = new Pedido(this.fechas, this.tiempos, this.clientes)

        this.pedidos.agregarElemento(this.elementosPedidos)
        this.pedidos.agregarElemento(this.elementosPedidos2)
        this.pedidos.agregarElemento(this.elementosPedidos2)

        this.restaurantes = new Restaurante("Spag Heddy", 3126758175, this.direccion)

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
    getDomicilio(){
        console.log(`${this.domicilios.getFormatoCorto()}`)
        console.log(`${this.domicilios.getFormatoExtendido()}`)
    }
    getCliente(){
        console.log(`${this.clientes.getPerfil()}`)
    }
    getProducto(){
        console.log(`${this.productos.getDescripcion()}`)
    }
    getElementoPedido(){
        console.log(`${this.elementosPedidos.getDescripccion()}`)
    }
    getPedido(){
        console.log(this.pedidos.getResumen())
        console.log(this.pedidos.getNumeroElementos())
        console.log(this.pedidos.getNumeroProductos())
        console.log(this.pedidos.getCostoTotal())
        this.pedidos.listarElemeto()
 
    }
    getRestaurante()
    {
        this.restaurantes.registrarProducto(this.productos)
        this.restaurantes.registrarProducto(this.productos2)
        this.restaurantes.registrarPedido(this.pedidos)

        this.restaurantes.listarProductos()
        this.restaurantes.listarPedidos()
    }
}
let app = new Main()
app.getRestaurante()
