import axios from 'axios';
import express, { Request, Response , Router} from 'express';

const router = Router();


router.get('/byLetter/:letter', async (req: Request, res: Response) => {
    const { letter } = req.params;


    try {
        const response = await axios.get( `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)


        if(response.data.drinks) {
            res.json(response.data.drinks);
        } else{
            res.status(400).json({message: 'No se encontraron cócteles.' });
        }
    } catch (error) {
        res.status(500).json ({message: 'Error al obtener c+octeles.'});
    }
});

export default router;