const express = require("express");
const connection = require("./db");
const cors = require("cors");
const cartRoute = require("./routes/cart.route");
const productsRoute = require("./routes/products.routes");
const routes = require('./routes/routes');
const  orderRoute  = require("./routes/orders.route");

const app = express();
require("dotenv").config()
const PORT = process.env.PORT

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.use("/products",productsRoute);

app.use("/carts",cartRoute);

app.use("/orders",orderRoute);

app.use("/",routes);

app.get("/",(req,res)=> res.send("Welcome to Tokerunner's Backend API server."));

app.listen(PORT,async()=>{
    try{
        await connection
            console.log("Server started at http://localhost:3500");
        }
        catch{
            console.log("failed to connect to db")
        }
})


