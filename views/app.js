const express = require("express");
const app = express();

/*const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));*/
const path = require('path');
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.sendFile(path.resolve("./views/home.html"));
});

app.get("/login", (req,res) =>{
    res.sendFile(path.resolve("./views/home.html"));
});


app.listen(3008,() => console.log ("servidor en puerto 3008"))
