const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render(`index`)
})

app.get('/:title', (req, res) => {
  const title = {
    title: `${req.params.title}`,
  }
  res.render('show', { title: title });
})


app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})