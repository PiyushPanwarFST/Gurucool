import express from 'express';
import mongoose from 'mongoose';
import router from './routes/clientRoute.mjs';
import cors from 'cors';
import {config} from 'dotenv'

config()

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://piyush2002panwar:GEVr2dKq5A5CnejH@cluster0.rivcjo2.mongodb.net/client").then(()=> console.log('database connected')).catch((err)=> console.log(err));
app.use('/', router);
app.listen(8000, ()=> {console.log('server started on port: 8000')});