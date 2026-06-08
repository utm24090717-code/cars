import { Tabla } from "../models/modelo.js"
Tabla.create({
    marca : Toyota,
    modelo : 2020,
    nombre : Yaris
},
{
    marca : Nissan,
    modelo : 2000,
    nombre : Tsuru
},
{
    marca : Honda,
    modelo : 2004,
    nombre : Civic
}
)

export const test =() => console.log("Lammada al controlador")