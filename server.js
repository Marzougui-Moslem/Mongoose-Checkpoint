console.clear()
const express=require("express");
const mongoose=require("mongoose");
const routerProduct = require("./router/productRouter.js");
const routerUser = require("./router/userRouter.js");



const app =express();
require("dotenv").config();

app.use(express.json());

const URL=process.env.URL_DB;
const PORT=process.env.PORT;

mongoose
  .connect(url)
  .then(console.log("dataBase is connected successfuly"))
  .catch((err)=> console.log("cannot connect to ur db ",err));


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${PORT}`);
});