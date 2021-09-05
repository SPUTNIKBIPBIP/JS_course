const express = require('express');
const app = express();
const port = 3000;

///products/114
app.get('/products/:id', (req, res) => {
    // handle this request `req.params.id`
    res.end(req.params.id);
})

///products?page=1&pageSize=20
app.get('/products', (req, res) => {
    res.json(req.query);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
