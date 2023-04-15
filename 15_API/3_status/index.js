import express from 'express'

const app = express()
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

//endpoints
app.get('/', (req, res) => {
  res.status(200).json({message: "Route created successfully"})
})

app.post('/createproduct', (req, res) => {
  const { name, price } = req.body
  console.log(`Product Name: ${name} - Price $: ${price}`)

  if (!name || typeof name !== "string") {
    return res.status(422).json({message: "Name is required and must contains at least one letter"})
  }
  return res.status(201).send({message: `Product: ${name} - $${price}`})
})

app.listen(3000)
