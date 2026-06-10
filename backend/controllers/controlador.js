import { Tabla } from "../models/modelo.js"
Tabla.create({
    Marca : "Toyota",
    Modelo : "2020",
    Nombre : "Yaris"
},
{
    Marca : "Nissan",
    Modelo : "2000",
    Nombre : "Tsuru"
},
{
    Marca : "Honda",
    Modelo : "2004",
    Nombre : "Civic"
}
)

export const test =() => console.log("Lammada al controlador")