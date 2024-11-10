'use client';
import { useEffect, useState } from 'react';

export default function FoodList() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await fetch('/api/food');
      const data = await response.json();
      setIngredients(data);
    }

    fetchIngredients();
  }, []);

  if (ingredients.length === 0) {
    return <div>Loading food list...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Food List</h2>
      <ul className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="bg-white p-4 rounded shadow-lg">{ingredient.name} ({ingredient.quantity})</li>
        ))}
      </ul>
    </div>
  );
}