export default function History() {
    // This would typically come from your state management or backend
    const recipes = [
      { name: 'Spaghetti Bolognese', date: '2023-05-15' },
      { name: 'Chicken Curry', date: '2023-05-14' },
      { name: 'Vegetable Stir Fry', date: '2023-05-13' },
    ]
  
    return (
      <div>
        <h2 className="text-3xl text-green-800 font-bold mb-4">Historial de recetass</h2>
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
  }