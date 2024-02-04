require('dotenv').config()
require('./src/dbconnect/connect');
const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const allconfig= require("./src/config/allConfig")
app.use(cors());
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    scriptSrc: ["'self'", "'unsafe-inline'"]
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/abc',async (req, res) => {
 return res.send({ title: 'World class diamond',test:test })
});

app.use('/api', require("./src/routers/index"));


// Route for serving React.js application for all other routes
// app.get(/^\/(?!v1\/api).*/, (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });




app.listen(allconfig.PORT,()=>{
    console.log("Server runing on port",allconfig.PORT)
})






