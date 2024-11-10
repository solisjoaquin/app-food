'use client'

import { useState } from 'react'

export default function AddMember() {
  const [name, setName] = useState('')
  const [profile, setProfile] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send this data to your backend or state management
    console.log('Adding family member:', name)
    console.log('Adding family member:', profile)
    setName('')
    setProfile('')
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Family Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Perfil</label>
          <input
            type="text"
            id="profile"
            placeholder="Agrega detalles de su alimentación"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-800 text-white p-4 rounded-lg hover:bg-gren-600 transition duration-300">
          Agregar familiar
        </button>
      </form>
    </div>
  )
}
