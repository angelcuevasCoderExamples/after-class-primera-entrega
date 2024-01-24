const express = require('express');
const port = 8080;
const itemsRouter = require('./routes/items.router')
const collectionsRouter = require('./routes/collection.router');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>console.log(`Server running on port ${port}`));

app.use('/api/items', itemsRouter);
app.use('/api/collections', collectionsRouter);



