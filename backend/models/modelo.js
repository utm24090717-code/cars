import {Schema, model} from 'mongose'

const Esqueleto_Tabla = new Schema({
    Marca : String,
    Modelo : String,
    Nombre : String
})

export const Tabla = new model("Tabla de coches", Esqueleto_Tabla) 