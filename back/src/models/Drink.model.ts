import mongoose, {Schema, Document, Model } from "mongoose";

export interface IDrink extends Document {

  idDrink?: string;
  strDrink: string;
  strDrinkAlternate?: string | null;
  strTags?: string | null;
  strVideo?: string | null;
  strCategory: string;
  strIBA?: string | null;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions: string;
  strInstructionsES?: string | null;
  strInstructionsDE?: string | null;
  strInstructionsFR?: string | null;
  strInstructionsIT?: string | null;
  strInstructionsZH_HANS?: string | null;
  strInstructionsZH_HANT?: string | null;
  strDrinkThumb: string;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strMeasure1?: string | null;
  strMeasure2?: string | null;
  strMeasure3?: string | null;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
  strImageSource?: string | null;
  strImageAttribution?: string | null;
  strCreativeCommonsConfirmed?: string;
  dateModified?: Date;
  
}

const drinkSchema: Schema<IDrink> = new Schema({

  idDrink: { type: String, default: null },
  strDrink: { type: String, required: true },
  strDrinkAlternate: { type: String, default: null },
  strTags: { type: String, default: null },
  strVideo: { type: String, default: null },
  strCategory: { type: String, required: true },
  strIBA: { type: String, default: null },
  strAlcoholic: { type: String, default: null },
  strGlass: { type: String, default: null},
  strInstructions: { type: String, required: true },
  strInstructionsES: { type: String, default: null },
  strInstructionsDE: { type: String, default: null },
  strInstructionsFR: { type: String, default: null },
  strInstructionsIT: { type: String, default: null },
  strInstructionsZH_HANS: { type: String, default: null },
  strInstructionsZH_HANT: { type: String, default: null },
  strDrinkThumb: { type: String, required: true },
  strIngredient1: { type: String, default: null },
  strIngredient2: { type: String, default: null },
  strIngredient3: { type: String, default: null },
  strIngredient4: { type: String, default: null },
  strIngredient5: { type: String, default: null },
  strIngredient6: { type: String, default: null },
  strIngredient7: { type: String, default: null },
  strIngredient8: { type: String, default: null },
  strIngredient9: { type: String, default: null },
  strIngredient10: { type: String, default: null },
  strIngredient11: { type: String, default: null },
  strIngredient12: { type: String, default: null },
  strIngredient13: { type: String, default: null },
  strIngredient14: { type: String, default: null },
  strIngredient15: { type: String, default: null },
  strMeasure1: { type: String, default: null },
  strMeasure2: { type: String, default: null },
  strMeasure3: { type: String, default: null },
  strMeasure4: { type: String, default: null },
  strMeasure5: { type: String, default: null },
  strMeasure6: { type: String, default: null },
  strMeasure7: { type: String, default: null },
  strMeasure8: { type: String, default: null },
  strMeasure9: { type: String, default: null },
  strMeasure10: { type: String, default: null },
  strMeasure11: { type: String, default: null },
  strMeasure12: { type: String, default: null },
  strMeasure13: { type: String, default: null },
  strMeasure14: { type: String, default: null },
  strMeasure15: { type: String, default: null },
  strImageSource: { type: String, default: null },
  strImageAttribution: { type: String, default: null },
  strCreativeCommonsConfirmed: { type: String, default: null },
  dateModified: { type: Date, default: Date.now },
});

const Drink: Model<IDrink> = mongoose.model<IDrink>("Drink", drinkSchema)

export default Drink;