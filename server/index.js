const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.get('api/pokedex', (req, res) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(pokedex => {
        res.status(200).data(pokedex.data)

    })
})


const Port = 3005;
app.listen(Port, () => console.log(`Listening on ${Port}`))