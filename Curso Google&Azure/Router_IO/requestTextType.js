const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.json({ extended: false}))

///localhost:3000/products?page=1&pageSize=20

/*
USE git bash


curl -i -X POST -H "Content-Type: application/json" -d "{\"key\":\"val\"}" http://localhost:3000/products
*/
app.post('/products', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
