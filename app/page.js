import Link from "next/link";

const GenerateFood = () => (
  <Link href="/generate-food">
    <svg
      className="w-16 h-16 p-4 bg-[#042322] text-white rounded-full shadow-xl fixed bottom-24 right-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
      <path d="M6 17h12" />
    </svg>
  </Link>
);

// generate a component AddFood with an input and the button to add a food. The icon is a mic because the user can add a food by voice.

const AddFood = () => (
  <div className="flex items-center justify-between gap-2 rounded-xl">
    <input
      type="text"
      placeholder="Agregar alimento"
      className="w-full p-2 border rounded-lg"
    />
    <button className="bg-[#24C690] text-white p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-mic"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    </button>
  </div>
);

// generate a component FoodList that show a list of foods in a x-scrollable container. Each fooa has name and quantity.

const FoodList = ({ foods }) => (
  <div className="flex gap-2 overflow-x-scroll">
    {foods.map((food, index) => (
      <div
        key={index}
        className="bg-[#24C690] min-w-28 min-h-24 text-white py-2 rounded-xl flex flex-col items-center justify-center"
      >
        <span className="px-4  text-lg tracking-tight font-semibold">
          {food.name}
        </span>
        {/* <span>{food.quantity}</span> */}
      </div>
    ))}
  </div>
);

const RecipesList = ({ foods }) => (
  <div className="flex gap-2 overflow-x-scroll bg-[#fafafa]">
    {foods.map((food, index) => (
            <div class="bg-white rounded-lg shadow-lg md:flex">
        <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
        <div class="p-6">
          <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">{food.name}</h2>
        </div>
    </div>
    ))}
  </div>
);

const foods = [
  { name: "Leche", quantity: "1 litro" },
  { name: "Huevos", quantity: "6" },
  { name: "Pan", quantity: "1 barra" },
  { name: "Manzanas", quantity: "3" },
  { name: "Yogur", quantity: "2" },
  { name: "Pollo", quantity: "1 kilo" },
  { name: "Papas", quantity: "1 kilo" },
  { name: "Cebollas", quantity: "3" },
  { name: "Zanahorias", quantity: "4" },
  { name: "Tomates", quantity: "2" },
  { name: "Pasta", quantity: "1 paquete" },
  { name: "Arroz", quantity: "1 kilo" },
];

const recetas = [
  { name: "Tarta de manzana", ingredients: ["Manzanas", "Huevos", "Azúcar"] },
  { name: "Pollo al horno", ingredients: ["Pollo", "Papas", "Cebollas"] },
  { name: "Ensalada", ingredients: ["Tomates", "Zanahorias", "Lechuga"] },
  { name: "Arroz con pollo", ingredients: ["Arroz", "Pollo", "Cebollas"] },
];

export default function Home() {
  return (
    <div className="">
      <nav className="bg-[#FAFAFA] rounded-xl py-2">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <AddFood />
        </div>
      </nav>

      <div className="mb-3 p-3">
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Mi heladera</h2>
          <p className="text-sm text-gray-500">
            ver mas 
          </p>
        </div>
        <div className="">
          <FoodList foods={foods} />
        </div>
      </div>

      <div className="mb-3 p-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Mis recetas</h2>
          <p className="text-sm text-gray-500">
            ver mas 
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-lg flex">
          <img src="https://www.indega.com.py/primicia/wp-content/uploads/2022/04/pure-de-papa-con-pollo-broaster-large-qlJiPE4lyS.jpeg" alt="Laptop on Desk" class="w-1/3 rounded-l-lg md:rounded-t-none" />
          <div class="p-6">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-700">Milanesas con pure</h2>
            <p class="text-orange-700">
              ver receta
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mb-12 p-3 ">
        <h2 className="text-2xl font-semibold mb-3">Grupo Familiar</h2>
        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            href="/add-member"
            className="bg-[#24C690] text-white p-4 rounded-xl hover:bg-green-900 transition duration-300 flex flex-col items-center justify-center shadow-xl"
          >
            <div className="flex justify-center mb-2">
              <svg
                className="w-8 h-8 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </div>
            Agregar miembro
          </Link>
          <Link
            href="/family-members"
            className="bg-[#24C690] text-white p-4 rounded-xl hover:bg-green-900 transition duration-300 flex flex-col items-center justify-center shadow-xl"
          >
            <div className="flex justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
            Mostrar grupo familiar
          </Link>
        </div>
      </div> */}

      <GenerateFood />
    </div>
  );
}
