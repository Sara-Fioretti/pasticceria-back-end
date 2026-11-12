const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const errorsHandler = require("./middlewares/errorsHandler")
const notFound = require ("./middlewares/notFound")

app.use(express.static('public'))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173'}))

app.use(errorsHandler)
app.use(notFound)