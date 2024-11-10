export async function GET() {
    
        const response = await fetch('https://back-quecomemoshoy.vercel.app/recetas');
    
        const data = await response.json();
    
        return Response.json(data)
        
    
    }