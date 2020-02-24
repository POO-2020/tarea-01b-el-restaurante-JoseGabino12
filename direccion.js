export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this.calles = calle
        this.numerosExterior = numeroExterior
        this.numerosInterior = numeroInterior
        this.colonias = colonia
        this.codigosPostal = codigoPostal
        this.ciudades = ciudad
        this.municipios = municipio

        console.log(`Objeto Inicializado`)
    }
    getFormatoCorto(){
        return `${this.calles} ${this.numerosExterior}`
    }
    getFormatoExtendido(){
        return `${this.calles} ${this.numerosExterior} ${this.numerosInterior} ${this.colonias} ${this.codigosPostal} ${this.ciudades} ${this.municipios}`
    }
}