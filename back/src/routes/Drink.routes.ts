import express, { Router } from "express";
import {
  createDrink,
  getDrinks,
  getDrinkById,
  updateDrink,
  deleteDrink,
} from "../controllers/Drink.controller";

const router: Router = express.Router();

router.post("/new", createDrink );


router.get("/", getDrinks);

router.get("/:id", getDrinkById);

router.put("/:id", updateDrink);

router.delete("/:id", deleteDrink);

export default router;


