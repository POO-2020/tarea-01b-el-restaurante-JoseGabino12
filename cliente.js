export default class Cliente{
    /**
     * 
     * @param {string} nombre 
     * @param {string} direccion 
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this.nombres = nombre
        this.direcciones = direccion
        this.telefonos = telefono
    }
    getPerfil(){
        return `${this.nombres} ${this.direcciones.getFormatoCorto()} ${this.telefonos}`
    }
}