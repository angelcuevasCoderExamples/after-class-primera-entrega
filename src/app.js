const ItemsManager = require('./ItemsManager');
const express = require('express');
const port = 8080;

const manager = new ItemsManager(__dirname+'/files/items.json')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, ()=>console.log(`Server running on port ${port}`));


app.get('/api/items', async (req, res)=>{
    let items = await manager.getItems()

    const {limit} = req.query;
    if(limit){
        items = items.slice(0,limit)
    } 

    res.send({items: items})
})

app.post('/api/items', async (req, res)=>{
    await manager.addItem(req.body)
    res.send({status:'success'})
})


async function addProducts(){
    await manager.addItem({description:'item 1'})
    await manager.addItem({description:'item 2'})
}

addProducts()
