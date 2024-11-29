import { Request, Response } from "express";
import Drink from "../models/Drink.model";





export const createDrink = async (req: Request, res: Response) => {
    try {
        const drink = new Drink(req.body);
        const savedDrink = await drink.save();
        res.status(201).json(savedDrink);

    } catch (error) {
        res.status(500).json({message: "Error al crear la bebida", error});
    }
};

export const getDrinks = async (req: Request, res: Response) =>{
    try {
        const drinks = await Drink.find()
        res.status(200).json(drinks);

    } catch (error) {
         res.status(500).json({message: "Error al obtener las bebidas", error})
    }
};

export const getDrinkById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const drink = await Drink.findById(id);
        
        if(!drink){
            res.status(404).json({message: "Bebida no encontrada"});
        }
        res.status(200).json(drink)

    } catch (error) {

        res.status(500).json({message: "Error al obtener la bebida", error});
    }
};

export const updateDrink = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateDrink = await Drink.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if(!updateDrink){
            res.status(404).json({message: "Bebida no encontrada"});
        }

         res.status(200).json(updateDrink);

    } catch (error) {
         res.status(500).json({message: "Error al actualizar la bebida", error})
    }
};

export const deleteDrink = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const deleteDrink = await Drink.findByIdAndDelete(id)

        if(!deleteDrink){
            res.status(404).json({message: "Bebida no encontrada"});
        }
        res.status(200).json({message: "Bebida eliminada correctamente"});

    } catch (error) {

         res.status(500).json({message: "Error al eliminar la bebida", error});
        
    }
};