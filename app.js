import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies'
import { corsMiddleware } from './middlewares/cors'

//COMO LEER UN JSON EN ESModules
/*
import fs from 'node:fs'
const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))
*/

//IMPORT DEL FUTURO SERÁ ASÍ
// import movies from './movies.json' with { type: 'json' }

//COMO LEER UN JSON EN ESModules RECOMENDADO ACTUALMENTE

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
