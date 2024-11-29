import axios from 'axios';
import Drink from '../models/Drink.model'; 

const loadCocktailsIntoDB = async () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (const letter of alphabet) {
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
      
      if (response.data.drinks) {
        for (const drink of response.data.drinks) {
          const drinkData = {
            idDrink: drink.idDrink,
            strDrink: drink.strDrink,
            strTags: drink.strTags || null,
            strVideo: drink.strVideo || null,
            strCategory: drink.strCategory,
            strIBA: drink.strIBA || null,
            strAlcoholic: drink.strAlcoholic,
            strGlass: drink.strGlass,
            strInstructions: drink.strInstructions,
            strInstructionsES: drink.strInstructionsES || null,
            strInstructionsDE: drink.strInstructionsDE || null,
            strInstructionsFR: drink.strInstructionsFR || null,
            strInstructionsIT: drink.strInstructionsIT || null,
            strInstructionsZH_HANS: drink.strInstructionsZH_HANS || null,
            strInstructionsZH_HANT: drink.strInstructionsZH_HANT || null,
            strDrinkThumb: drink.strDrinkThumb,
            strIngredient1: drink.strIngredient1 || null,
            strIngredient2: drink.strIngredient2 || null,
            strIngredient3: drink.strIngredient3 || null,
            strIngredient4: drink.strIngredient4 || null,
            strIngredient5: drink.strIngredient5 || null,
            strIngredient6: drink.strIngredient6 || null,
            strIngredient7: drink.strIngredient7 || null,
            strIngredient8: drink.strIngredient8 || null,
            strIngredient9: drink.strIngredient9 || null,
            strIngredient10: drink.strIngredient10 || null,
            strIngredient11: drink.strIngredient11 || null,
            strIngredient12: drink.strIngredient12 || null,
            strIngredient13: drink.strIngredient13 || null,
            strIngredient14: drink.strIngredient14 || null,
            strIngredient15: drink.strIngredient15 || null,
            strMeasure1: drink.strMeasure1 || null,
            strMeasure2: drink.strMeasure2 || null,
            strMeasure3: drink.strMeasure3 || null,
            strMeasure4: drink.strMeasure4 || null,
            strMeasure5: drink.strMeasure5 || null,
            strMeasure6: drink.strMeasure6 || null,
            strMeasure7: drink.strMeasure7 || null,
            strMeasure8: drink.strMeasure8 || null,
            strMeasure9: drink.strMeasure9 || null,
            strMeasure10: drink.strMeasure10 || null,
            strMeasure11: drink.strMeasure11 || null,
            strMeasure12: drink.strMeasure12 || null,
            strMeasure13: drink.strMeasure13 || null,
            strMeasure14: drink.strMeasure14 || null,
            strMeasure15: drink.strMeasure15 || null,
            strImageSource: drink.strImageSource || null,
            strImageAttribution: drink.strImageAttribution || null,
            strCreativeCommonsConfirmed: drink.strCreativeCommonsConfirmed,
            dateModified: drink.dateModified || Date.now(),
          };

          
          await Drink.create(drinkData);
        }
      } else {
        console.log(`No se encontraron cócteles para la letra ${letter}`);
      }
    } catch (error) {
      console.error(`Error al obtener los cócteles para la letra ${letter}:`, error);
    }
  }
};

export default loadCocktailsIntoDB;