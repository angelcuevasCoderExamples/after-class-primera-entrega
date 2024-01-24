const fs = require('fs');

class ItemsManager {
    static id; 

    constructor(path){
        this.path = path; 
        
        fs.writeFileSync(path, '[]')
        
    }


    async addItem(item){
        
        const content = await  fs.promises.readFile(this.path, 'utf-8'); //leemos archivo
        const items = JSON.parse(content); //convertimos archivo en objeto javascript 

        item.id = ++ItemsManager.id; 

        items.push(item); //agregamos item, argumento de la función 

        //antes de guardar el array hacemos JSON.stringify para convertir nuestro objeto en JSON 
        await fs.promises.writeFile(this.path, JSON.stringify(items,null, '\t')); //escribimos el archivo
    }

    async getItems(){
        const content = await  fs.promises.readFile(this.path, 'utf-8'); //leemos archivo
        const items = JSON.parse(content); //convertimos archivo en objeto javascript 

        return items; 
    }

    async getItem(id){
        const content = await  fs.promises.readFile(this.path, 'utf-8'); //leemos archivo
        const items = JSON.parse(content); //convertimos archivo en objeto javascript 

        const item = items.find(i=>i.id == id) //buscamos un item con ese mismo id 

        return item; 
    }
}

module.exports = ItemsManager; 