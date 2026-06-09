import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {test} from './backend/controllers/controlador.js';


dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log('Se conecto'))

.catch((error) => console.error('Error:'))


const app = express();
app.use(cors());


app.listen(4000, () => console.log("Spuerto 4000"))
test();
