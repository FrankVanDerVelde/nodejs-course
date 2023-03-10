//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    // name: "Apple",
    rating: 10,
    review: "Peaches are so yummy!"
});

// fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    score: 10,
    review: "God tier fruit."
});

mango.save();

Person.updateOne({
    name: "John"}, {favoriteFruit: mango}, function(err){
        if (err) {
            console.log(err)
        } else {
            console.log("Succesfully added mango to Johns favorite fruit.")
        }
    }
);

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple
// });

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits to the fruitsDB");
//     }
// });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
        // console.log(fruits);
    }
});

// Fruit.updateOne({
//     _id: "5f621e7f80e3ef5dd8f69c7a"
// }, {
//     name: "Peach"
// }, function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Succesfully updated the document.");
//     }
// });

// Fruit.deleteOne({
//     name: "Peach"
// }, function (err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Succesfully deleted the document")
//     }
// });

// Person.deleteMany({name:"John"}, function(err){
//     if (err){
//         console.log(err)
//     } else {
//         console.log("Succesfully deleted all the documents");
//     }
// });