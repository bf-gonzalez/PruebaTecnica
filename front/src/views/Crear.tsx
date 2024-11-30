import React, { useState } from 'react';

const Crear: React.FC = () => {
  const [formData, setFormData] = useState({
    strDrink: '',
    strCategory: '',
    strInstructions: '',
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica para evitar enviar datos incompletos
    if (!formData.strDrink || !formData.strCategory || !formData.strInstructions || !formData.strDrinkThumb) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    const cleanData = {
      strDrink: formData.strDrink,
      strCategory: formData.strCategory,
      strInstructions: formData.strInstructions,
      strDrinkThumb: formData.strDrinkThumb,
      strIngredient1: formData.strIngredient1 || null,
      strIngredient2: formData.strIngredient2 || null,
      strIngredient3: formData.strIngredient3 || null,
    };

    try {
      const response = await fetch('http://localhost:3000/api/cocktails/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanData),
      });

      if (response.ok) {
        alert('Bebida creada con éxito!');
        setFormData({
          strDrink: '',
          strCategory: '',
          strInstructions: '',
          strDrinkThumb: '',
          strIngredient1: '',
          strIngredient2: '',
          strIngredient3: '',
        });
      } else {
        alert('Hubo un error al crear la bebida. Revisa la consola para más detalles.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema con la solicitud.');
    }
  };

  return (
    <div className="p-8 bg-cover bg-center bg-opacity-40" style={{ backgroundImage: 'url(https://fotos.perfil.com//2022/08/30/900/0/copas-de-vinos-20220830-1410586.jpg)' }}>
      <h1 className="text-3xl font-bold text-center text-white mb-8">Crea una nueva Bebida</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-lg opacity-80 max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="strDrink">
            Nombre de la Bebida
          </label>
          <input
            type="text"
            id="strDrink"
            name="strDrink"
            value={formData.strDrink}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="strCategory">
            Categoría
          </label>
          <input
            type="text"
            id="strCategory"
            name="strCategory"
            value={formData.strCategory}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="strInstructions">
            Instrucciones
          </label>
          <textarea
            id="strInstructions"
            name="strInstructions"
            value={formData.strInstructions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={3}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="strDrinkThumb">
            URL de la Imagen
          </label>
          <input
            type="url"
            id="strDrinkThumb"
            name="strDrinkThumb"
            value={formData.strDrinkThumb}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="strIngredient1">
            Ingrediente 1
          </label>
          <input
            type="text"
            id="strIngredient1"
            name="strIngredient1"
            value={formData.strIngredient1}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="strIngredient2">
            Ingrediente 2
          </label>
          <input
            type="text"
            id="strIngredient2"
            name="strIngredient2"
            value={formData.strIngredient2}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="strIngredient3">
            Ingrediente 3
          </label>
          <input
            type="text"
            id="strIngredient3"
            name="strIngredient3"
            value={formData.strIngredient3}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 w-full">
          Crear Bebida
        </button>
      </form>
    </div>
  );
};

export default Crear;