//console.log(addDollarSign(100));

// Function declaration
function addDollarSign(value) {
    return '$' + value;
}

// When using declaration, we can invoke the funcation before the declaration
// With expression, we can not
console.log(addDollarSign(100));

// Function expression
const addPlusSign = function (value) {
    return `+` + value;
};

//console.log(addPlusSign(200));