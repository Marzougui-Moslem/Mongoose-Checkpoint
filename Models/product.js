const mongoose=require("mongoose")

const Schema =mongoose.Schema
const productschema =new schema({
    name: {
        type: String,
        required: true,
        min :3,
        max:15
    },
    price :Number,
    Image :  Array,
    descr : String,

})
const product =mongoose.model("product", productSchema)
module.exports =product