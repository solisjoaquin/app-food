
export async function GET() {
/* 
    const foodList = [
        { name: 'Tomates', quantity: 2 },
        { name: 'Cebollas', quantity: 4 },
        { name: 'Ajos', quantity: 1 },
        { name: 'Pollo', quantity: 1 },
        { name: 'Arroz', quantity: 1 }
    ] */
    // obtener informacion de la url: https://back-quecomemoshoy.vercel.app/insumos 

    const response = await fetch('https://back-quecomemoshoy.vercel.app/insumos');

    const data = await response.json();

    return Response.json(data)
    

}