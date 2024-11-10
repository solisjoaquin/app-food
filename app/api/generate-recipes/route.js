import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req) {
  const { prompt } = await req.json()
  
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'Eres un asistente útil que genera recetas basadas en los ingredientes dados. Siempre devuelva la respuesta como una matriz JSON de 5 objetos de receta. Cada objeto de receta debe tener las propiedades "nombre", "ingredientes" (array) e "instrucciones" (array).'
    
    },
      {
        role: 'user',
        content: `Genera 5 recetas para los siguientes usuarios y sus perfiles: ${prompt.members.join(', ')} y los siguientes ingredientes ${prompt.ingredients.join(', ')}. Ten en cuenta el perfil de cada miembro al generar las recetas. Prioriza comida tradicional argentina.`
    }
    ],
    max_tokens: 1000,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    n: 1,
  })

  const stream = OpenAIStream(response)
  console.log('stream', stream);
  return new StreamingTextResponse(stream)
}