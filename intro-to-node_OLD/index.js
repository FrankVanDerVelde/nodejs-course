//jshint esversion:6

var superheroes = require("superheroes");

var supervillains = require("supervillains");

var mySupervillainName = supervillains.random()

var mySuperheroName = superheroes.random();

console.log(mySuperheroName + ' vs ' + mySupervillainName);