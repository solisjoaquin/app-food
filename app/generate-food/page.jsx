'use client'

import { useState } from 'react'
import { useCompletion } from 'ai/react'

const Loading = () => (
  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
)

export default function GenerateFood() {
  const [members, setMembers] = useState(['John Doe', 'Jane Doe', 'Jimmy Doe', 'Jenny Doe'])
  const [ingredients, setIngredients] = useState(['Pollo', 'Tomates', 'ajo', 'papa'])
  const [recipes, setRecipes] = useState([])

  const { complete, isLoading } = useCompletion({
    api: '/api/generate-recipes',
  })

  const generateRecipes = async () => {
    const ingredientsAndMembers = {
      ingredients: ingredients,
      members: members
    }
    console.log('data',ingredientsAndMembers);
    // const result = await complete(ingredients.join(', '))
    const result = await complete(ingredientsAndMembers)
    console.log('result', result);
    const parsedRecipes = JSON.parse(result);
    console.log('parsedRecipes', parsedRecipes);
    setRecipes(parsedRecipes)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl text-green-800 font-bold mb-6">Obtener receta</h2>
      <div className="mb-4">
        <h3 className="text-lg mb-2">Ingredientes disponibles:</h3>
      <div className="mb-8 flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm"
          >
            {ingredient}
          </span>
        ))}
      </div>
      </div>
      <button
        onClick={generateRecipes}
        disabled={isLoading}
        className="bg-green-800 w-full text-white p-4 rounded-xl hover:bg-green-700 transition duration-300 disabled:bg-green-600"
      >
        {isLoading ? <div className="flex items-center justify-center"><Loading /> Generarando recetas</div> : 'Generar recetas'}
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