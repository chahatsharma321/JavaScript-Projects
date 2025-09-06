//by default modules are protect their functions and variables from leaking

console.log("we export and import this function for execution in main file");
function sum(a,b)
{
    const s = a+b;
    console.log(s);
}

var x = 10;

// module.exports = sum;    we can export this item 

// module.exports = { x:x,
//     sum : sum
// }  // for multiple items to export



// module.exports ={x , sum};

//module.exports is an empty object

module.exports.x =x;
module.exports.sum = sum;
