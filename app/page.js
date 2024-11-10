import Link from 'next/link'


export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Que comemos hoy?
      </h1>
      
      <div className="mb-12 bg-green-200 p-3">
        <h2 className="text-2xl font-semibold mb-6">Heladera </h2>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/add-food" className="bg-green-800 text-white p-4 rounded hover:bg-green-900 transition duration-300 flex-col items-center justify-center">
            <div className="flex justify-center mb-2">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            Agregar Alimento
          </Link>
          <Link href="/food-list" className="bg-green-800 text-white p-4 rounded hover:bg-green-900 transition duration-300 flex flex-col gap-1 items-center justify-center">
          <div className="flex justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
            </div>
            Alimentos
          </Link>
        </div>
      </div>
      
      <div className="mb-12 bg-green-200 p-3">
        <h2 className="text-2xl font-semibold mb-8">Menú</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/history" className="bg-green-800 text-white p-4 rounded hover:bg-green-900 transition duration-300 flex flex-col items-center justify-center">
          <div className="flex justify-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
          </div>
            Historial de comidas
          </Link>
          <Link href="/generate-food" className="bg-green-800 text-white p-4 rounded hover:bg-green-900 transition duration-300 flex flex-col items-center justify-center">
          <div className="flex justify-center mb-2">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            </div>
            Generar menu
          </Link>
        </div>
      </div>
      
      <div className="mb-12 bg-green-200 p-3">
        <h2 className="text-2xl font-semibold mb-8">Grupo Familiar</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/add-member" className="bg-green-800 text-white p-4 rounded hover:bg-green-900 transition duration-300 flex flex-col items-center justify-center">
          <div className="flex justify-center mb-2">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            </div>
            Agregar miembro
          </Link>
          <Link href="/family-members" className="bg-green-800 text-white p-4 rounded hover:bg-green-900 transition duration-300 flex flex-col items-center justify-center">
          <div className="flex justify-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          </div>
            Mostrar grupo familiar
          </Link>
        </div>
      </div>

      
    </div>
  )
}