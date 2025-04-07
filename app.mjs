import express from 'express'
import {connectDB}from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs'
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use('/api',superHeroRoutes);
app.set('view engine','ejs');
app.use((req,res)=>{
    res.status(404).send({mensaje:"Ruta no encontrada"});
});
app.listen(PORT,()=>{
    console.log('Servidor escuchando en el puerto ${PORT}');
});