export default class Tiempo{
    constructor(hora, minuto, periodo){
        this.horas = hora
        this.minutos = minuto
        this.periodos = periodo
        
        console.log("Elemento iniciaizado")
    }
    getFormato12(){
        return  `${this.horas}:${this.minutos} ${this.periodos}`
    }
    getFormato24(){
        let hora24
        let suma  
        let resta
        if( (this.horas == 12)&&(this.periodos == "AM") ){
            resta = this.horas - 12
            hora24 = resta
        }else if( (this.horas >= 1)&&(this.periodos == "PM")){
            suma = this.horas + 12
            hora24 = suma
        }else{
            return `${this.horas}:${this.minutos} ${this.periodos}`
        }
        return `${hora24}:${this.minutos} ${this.periodos}`
    }
}