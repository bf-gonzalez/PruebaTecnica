import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';
import loadCocktailsIntoDB from './utils/Drinks.utils';  

dotenv.config(); 


const mongoURI = process.env.MONGO_URI as string;



mongoose
.connect(mongoURI)
.then(() => {
  console.log('Conexión exitosa a MongoDB');


  loadCocktailsIntoDB();

  
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.log('Error al conectar con MongoDB', err);
});



