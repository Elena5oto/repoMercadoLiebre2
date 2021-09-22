const express = require("express");
const app = express();
const port= process.env.PORT || 3008;

/*const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));*/
const path = require('path');
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.sendFile(path.resolve("./views/home.html"));
});
app.get("/register.html", (req,res) =>{
    res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login.html", (req,res) =>{
    res.sendFile(path.resolve("./views/login.html"));
});


app.listen(port,() => console.log ("servidor en puerto 3008"))
