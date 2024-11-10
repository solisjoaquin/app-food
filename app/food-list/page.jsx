'use client';
import { useEffect, useState } from 'react';

export default function FoodList() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await fetch('/api/food');
      const data = await response.json();

      console.log('data', data);
      setIngredients(data);
    }

    fetchIngredients();
  }, []);

  if (ingredients.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de ingredientes</h2>
      <ul className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="bg-white p-4 rounded shadow-lg">{ingredient.nombre} ({ingredient.cantidad})</li>
        ))}
      </ul>
    </div>
  );
}