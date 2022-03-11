const express = require("express")

const app = express()

app.get('/',(req, res)=>{

    console.log("Index page logged in the logs")
    res.send("<h1>WELCOME TO THE NODE JSSSSS APP</h1>")

})

app.get('/help',(req, res)=>{

    console.log("Help page logged in the logs")
    res.send("<h1>WELCOME TO THE Help JSSSSS PAGE</h1>")

})


app.get('/about',(req, res)=>{

    console.log("About Page logged in the logs")
    res.send("<h1>This is About Page</h1>")

})



app.get('/home',(req, res)=>{

    console.log("Home Page logged in the logs")
    res.send("<h1>This is Home Page</h1>")

})



app.get('/career',(req, res)=>{

    console.log("Career Page logged in the logs")
    res.send("<h1>This is Career Page</h1>")

})

app.get('/people',(req, res)=>{

    console.log("People Page logged in the logs")
    res.send("<h1>This is People Page..How are you?</h1>")

})

app.listen(3000);
