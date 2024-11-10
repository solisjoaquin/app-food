/* export default function History() {
    // This would typically come from your state management or backend
    const recipes = [
      { name: 'Milanesas', date: '2023-05-15' },
      { name: 'Tomates rellenos', date: '2023-05-14' },
      { name: 'Empanadas de pollo', date: '2023-05-13' },
    ]
  
    return (
      <div>
        <h2 className="text-3xl text-green-800 font-bold mb-4">Historial de recetas</h2>
        <ul className="space-y-2">
          {recipes.map((recipe, index) => (
            <li key={index} className="bg-white px-4 pt-4 pb-8 rounded-xl shadow">
              <div className="text-xl font-bold mb-1">{recipe.name}</div> 
              <div className="text-gray-500">{recipe.date}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  } */

'use client';
import { useEffect, useState } from 'react';

export default function History() {
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    async function fetchrecipes() {
      const response = await fetch('/api/recetas');
      const data = await response.json();

      setrecipes(data);
    }

    fetchrecipes();
  }, []);

  if (recipes.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mis recetas favoritas</h2>
      <ul className="space-y-3">
        {recipes.map((receta, index) => (
          <li key={index} className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-seminbold mb-2">{receta.titulo}</h2>
            <div>
              {receta.descripcion}
            </div>
            
            </li>
        ))}
      </ul>
    </div>
  );
}