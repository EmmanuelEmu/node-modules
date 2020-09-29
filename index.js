const express = require('express');
const app = express();


app.get('/',(req,res) => {
    res.send("The data is about to run.");
})

app.listen(3000,()=>console.log('The path is about to listening.'));
