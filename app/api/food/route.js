
export async function GET() {

    const foodList = [
        { name: 'Tomates', quantity: 2 },
        { name: 'Cebollas', quantity: 4 },
        { name: 'Ajos', quantity: 1 },
        { name: 'Pollo', quantity: 1 },
        { name: 'Arroz', quantity: 1 }
    ]
    return Response.json(foodList)
}