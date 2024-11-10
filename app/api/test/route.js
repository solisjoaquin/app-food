// generate a random api to test


export async function GET() {
    const data = [
        { name: 'John Doe', profile: 'vegano' },
        { name: 'Jane Doe', profile: 'vegetariano' },
        { name: 'Jimmy Doe', profile: 'omnívoro' },
        { name: 'Jenny Doe', profile: 'vegano' },
    ]
    

    return Response.json({ data })
}