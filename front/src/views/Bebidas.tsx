import React, { useState, useEffect } from 'react';

const Bebidas: React.FC = () => {
  const [drinks, setDrinks] = useState<any[]>([]);
  const [filteredDrinks, setFilteredDrinks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedDrink, setSelectedDrink] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const drinksPerPage = 15;

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/cocktails/');
        if (!response.ok) throw new Error('Failed to fetch drinks');
        const data = await response.json();

        if (Array.isArray(data)) {
          setDrinks(data);
          setFilteredDrinks(data); 
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error: any) {
        console.error('Error fetching drinks:', error.message);
        setError('Failed to load drinks.');
      }
    };

    fetchDrinks();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredDrinks(drinks);
      setCurrentPage(1); 
    } else {
      const filtered = drinks.filter((drink) =>
        drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDrinks(filtered);
      setCurrentPage(1); 
    }
  }, [searchTerm, drinks]);

  const clearSearch = () => {
    setSearchTerm(''); 
  };

  const closeModal = () => setSelectedDrink(null);

  const deleteDrink = async (_id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cocktails/${_id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete drink');
      }

      // Actualiza el estado de drinks y filteredDrinks solo eliminando el cóctel específico
      setDrinks((prevDrinks) => prevDrinks.filter((drink) => drink._id !== _id));
      setFilteredDrinks((prevDrinks) => prevDrinks.filter((drink) => drink._id !== _id));
      setSelectedDrink(null); // Cerrar el modal después de eliminar
    } catch (error) {
      console.error('Error deleting drink:', error);
      setError('Failed to delete the drink.');
    }
  };

  const indexOfLastDrink = currentPage * drinksPerPage;
  const indexOfFirstDrink = indexOfLastDrink - drinksPerPage;
  const currentDrinks = filteredDrinks.slice(indexOfFirstDrink, indexOfLastDrink);
  const totalPages = Math.ceil(filteredDrinks.length / drinksPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url(https://fotos.perfil.com//2022/08/30/900/0/copas-de-vinos-20220830-1410586.jpg)',
      }}
    >
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">All Drinks</h1>

        {/* Barra de búsqueda */}
        <div className="flex justify-center mb-6 relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for a drink..."
            className="p-2 w-full border rounded-lg text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-2.5 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-6 h-6 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>

        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : currentDrinks.length === 0 ? (
          <p className="text-center">No drinks found</p>
        ) : (
          <div>
            <div className="grid grid-cols-5 gap-4">
              {currentDrinks.map((drink) => (
                <div
                  key={drink._id} // Usar _id en lugar de idDrink
                  className="card bg-white text-black shadow-md rounded-lg overflow-hidden relative cursor-pointer"
                  onClick={() => setSelectedDrink(drink)}
                >
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h2 className="text-lg font-semibold text-white">{drink.strDrink}</h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de paginación */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-lg font-bold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedDrink && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg w-3/4 max-w-4xl p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="flex gap-6">
              <div className="w-1/2">
                <img
                  src={selectedDrink.strDrinkThumb}
                  alt={selectedDrink.strDrink}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl font-bold mb-4">{selectedDrink.strDrink}</h2>
                <p className="mb-2">
                  <strong>Category:</strong> {selectedDrink.strCategory}
                </p>
                <p className="mb-2">
                  <strong>Instructions:</strong> {selectedDrink.strInstructions}
                </p>
                <ul className="list-disc pl-5">
                  {Array.from({ length: 15 })
                    .map((_, i) => selectedDrink[`strIngredient${i + 1}`])
                    .filter(Boolean)
                    .map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                </ul>

                {/* Botón de eliminación */}
                <button
                  onClick={() => deleteDrink(selectedDrink._id)} // Usar _id en lugar de idDrink
                  className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bebidas;