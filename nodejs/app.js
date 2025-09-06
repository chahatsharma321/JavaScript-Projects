
require("./xyz.js");
// const sum = require("./sum.js");
// const obj = require("./sum.js");

// const {x,sum} = require("./calculate/sum.js");    // object de-structring
// const {multiply} = require("./calculate/multiply")

const {sum , multiply} = require("../calculate/index");

const data = require("./data.json"); 

console.log(data);

// var name = "Ram";
var a =10;
var b =20;
// console.log(name);
// console.log(a+b);
// console.log(global);
// console.log(globalThis);

// sum(a,b);

// obj.sum(a,b);
// console.log(obj.x);

sum(a,b);
// console.log(x);
multiply(a,b);


// console.log(global === globalThis);
