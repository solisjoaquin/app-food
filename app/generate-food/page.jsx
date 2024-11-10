'use client'

import { useState, useEffect } from 'react'
import { useCompletion } from 'ai/react'

const Loading = () => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
)

export default function GenerateFood() {
  const [members, setMembers] = useState(['John Doe', 'Jane Doe', 'Jimmy Doe', 'Jenny Doe'])
  const [ingredients, setIngredients] = useState([]);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([])
  const [recipes, setRecipes] = useState([])

  const { complete, isLoading } = useCompletion({
    api: '/api/generate-recipes',
  })

  const generateRecipes = async () => {
    const ingredientsAndMembers = {
      ingredients: ingredientesSeleccionados,
      members: members
    }

    console.log(ingredientsAndMembers)
    // const result = await complete(ingredientsAndMembers)
    // const parsedRecipes = JSON.parse(result);
    // setRecipes(parsedRecipes)
  }

  

  useEffect(() => {
    async function fetchIngredients() {
      const response = await fetch('/api/food');
      const data = await response.json();
      setIngredients(data);
    }

    fetchIngredients();
  }, []);

  if (ingredients.length === 0) {
    return <div>Cargando...</div>;
  }


 // genera un componente chip que al presionarlo se elimina de la lista de ingredientes, tambien que cambie de color
  const Chip = ({ ingredient }) => {
    const [selected, setSelected] = useState(false)

    const handleSelect = () => {  
      setSelected(true)
    }

    return (
      <button
        onClick={handleSelect}
        className={`px-4 py-2 rounded-full text-sm ${selected ? 'bg-green-800 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        {ingredient.nombre}
      </button>
    )
  }



  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl text-green-800 font-bold mb-6">Obtener receta</h2>
      <div className="mb-4">
        <h3 className="text-lg mb-2">Elige los ingredientes que quieres cocinar:</h3>
      <div className="mb-8 flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <Chip key={index} ingredient={ingredient} />
        ))}
      </div>
      </div>
      <button
        onClick={generateRecipes}
        disabled={isLoading}
        className="bg-[#24C690] shadow-lg w-full text-white p-4 rounded-xl hover:bg-green-700 transition duration-300 disabled:bg-green-600"
      >
        {isLoading ? <div className="flex items-center justify-center"><Loading /> Generando recetas</div> : 'Generar recetas'}
      </button>
      {recipes.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl text-gray-600 font-semibold mb-4">Recetas generadas:</h3>
          <ul className="space-y-4">
            {recipes.map((recipe, index) => (
              <li key={index} className="bg-white p-4 rounded shadow">
                <h4 className="text-xl font-semibold mb-2">{recipe.nombre}</h4>
                <p className="mb-2"><strong className="text-green-800">Ingredientes:</strong> {recipe.ingredientes.join(', ')}</p>
                <p><strong className="text-green-800">Instrucciones:</strong></p>
                <ol className="list-decimal list-inside">
                  {recipe.instrucciones.map((step, stepIndex) => (
                    <li key={stepIndex} className="ml-4">{step}</li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}