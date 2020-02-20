var global
export default class Fecha{
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    
    constructor(dia, mes, año){
        this.fechas = new Date( año, mes - 1, dia)
        this.diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        this.años = ["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        console.log("Objeto inicializado")
    }
    getAños(){
        let añosTranscurridos 
        añosTranscurridos = 2020 - this.fechas.getFullYear() 
        global = añosTranscurridos
        return `${añosTranscurridos}`
    }
    getMeses(){
        let mesesTranscurridos
        mesesTranscurridos = global * 12
        global = mesesTranscurridos
        return `${mesesTranscurridos}`
    }
    getSemanas(){
        let semanasTranscurridas 
        semanasTranscurridas = global * 4
        global = semanasTranscurridas
        return `${semanasTranscurridas}`
    }
    getDias(){
        let diasTrasncurridos
        diasTrasncurridos = global * 7
        global = diasTrasncurridos
        return `${diasTrasncurridos}`
    }
    getFecha(){
        let mesDelAño
        mesDelAño = this.años[this.fechas.getMonth()]
        return `${this.fechas.getDate()}/${mesDelAño}/${this.fechas.getFullYear()}`
    }
    getDiaFecha(){
        let diaDeSemana
        diaDeSemana = this.diasSemana[this.fechas.getDay()]
        return `${diaDeSemana}`
    }
}