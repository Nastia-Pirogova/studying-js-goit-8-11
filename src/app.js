// const express = require('express');
//
// const app = express();
//
// app.use("*", () => {
//     console.log(`Был запрос от браузера`)
// })
//
// const listener = app.listen(4444, ()=> {
//     console.log(`Вeб сервер запущен на порте ${listener.address().post}`)
// })



const sum = (a, b) => a+b;
sum(2,3);

class Hero{
    constructor(name) {
    this._name = name;
    }

    get name(){
        return this._name;
    }


    set name(newName){
        this._name = newName;
    }
}

const  h = new Hero("mango");