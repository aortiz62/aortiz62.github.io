function sum(a, b) {
    return a + b;
}

let result = sum(7, 15);

document.getElementById("FunctionResult").innerHTML = "The sum of 7 and 15 is: " + result;

const multiply = function(x, y) {
    return x * y;
};

const result2 = multiply(10, 20);

document.getElementById("FunctionResult2").innerHTML = "10 multiplied by 20 is: " + result2;

const substract = (c, d) => {
    return c - d;
};

const result3 = substract(55, 15);
document.getElementById("FunctionResult3").innerHTML = "55 subtracted by 15 is: " + result3;
