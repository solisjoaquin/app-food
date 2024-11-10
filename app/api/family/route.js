
export async function GET() {

    const familyMembers = [
        { name: 'John Doe', profile: 'vegano' },
        { name: 'Jane Doe', profile: 'vegetariano' },
        { name: 'Jimmy Doe', profile: 'omnívoro' },
        { name: 'Jenny Doe', profile: 'vegetariano' },
    ]
    return Response.json(familyMembers)
}