const bodyParser = require("body-parser");
const express=  require("express") ;
const app = express()

var dbconnection = require('./db');
var productsRoute = require ('./routes/productsRoute');
var userRoute =  require('./routes/userRoute.js');
var orderRoute =  require('./routes/orderRoute.js');

app.use(bodyParser.json());
app.use('/api/products/' , productsRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)

app.get("/", (req,res) => {
 res.send('Backend arrived');
});

const port =8000;

app.listen(port , () => console.log("Node Server started"));  