require('dotenv').config()
require("./src/dbconnect/connect")
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyparser =require("body-parser")
const cors = require('cors');
const allconfig= require("./src/config/allConfig")
const app = express();
const path = require("path")

app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }))

let pathUrl
app.use((req, res, next) => {
    pathUrl = `Route Path ${req.method} = http://${req.hostname}:${allconfig.PORT}${req.path} `
    console.log(pathUrl)
    next() // calling next middleware function or handler
})

app.get('/abc',async (req, res) => {
 return res.send({ title: 'World class diamond',test:test })
});

app.use('/api', require("./src/routers/index"));


// Route for serving React.js application for all other routes
// app.get(/^\/(?!v1\/api).*/, (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.use(express.static(path.resolve(__dirname, "../frontend/build")))

// app.use("*", (req, res) => {
//     console.log("admin-------------", path.join(__dirname, "../frontend/build", "index.html"))
//     res.sendFile(path.join(__dirname, "../frontend/build", "index.html"))
// })


app.listen(allconfig.PORT,()=>{
    console.log("Server runing on port",allconfig.PORT)
})






