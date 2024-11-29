import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import drinkRoutes from './routes/Drink.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/cocktails', drinkRoutes);


app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor de cócteles!');
});

export default app;