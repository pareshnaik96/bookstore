import express from 'express'
import bodyParser from 'body-parser'
import { getBooks, getMagazines } from './readCSV'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(express.static('public'))

//Routes
app.get('/books', getBooks)
app.get('/magazines', getMagazines)


app.listen(PORT, () => {
    console.log(`Express App listening on port ${PORT}`)
})