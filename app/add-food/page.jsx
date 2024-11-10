'use client'

import { useState } from 'react'
import "../styles/styles.css"
export default function AddFood() {
  const [ingredient, setIngredient] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send this data to your backend or state management
    console.log('Adding ingredient:', ingredient)
    setIngredient('')
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 red">Agregar ingrediente</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="ingredient" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="ingredient"
            value={ingredient}
            placeholder="Pollo"
            onChange={(e) => setIngredient(e.target.value)}
            className="mt-1 p-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button type="submit" className="w-full bg-[#24C690] text-white p-4 rounded hover:bg-green-600 transition duration-300 shadow-lg">
          Agregar
        </button>

      </form>
    </div>
  )
}