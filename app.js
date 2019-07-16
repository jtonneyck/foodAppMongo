const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "hbs");

const Schema = mongoose.Schema;

const Restaurant = mongoose.model('restaurant', new Schema({
    cuisine: String,
    borough: String,
    name: String,
}), "restaurant");

mongoose.connect('mongodb://localhost/foodapp', {useNewUrlParser: true}, (err)=> {
    debugger
    if(err) console.log("ERROR EROROROR", err)
    else console.log("connected")
});

app.get("/restaurants",(req,res)=> {
    let cuisine = req.query.cuisine
    Restaurant.find({cuisine: cuisine})
        .then((restaurants)=> {
            res.render("restaurants.hbs", {restaurants: restaurants})
        })
})



app.listen(3000, ()=> {
    console.log("App listening")
})