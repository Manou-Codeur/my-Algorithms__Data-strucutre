function factorial (n) {
    if (n === 1 || n === 0) return 1;
    return n * (factorial(n-1));
}
// console.log(factorial(4)); 

function productOfArray (arr) {
    let product = 1;
    function inner (input) {
        if (input.length === 0) return;
        product *= input[0];
        inner(input.slice(1));
    }
    inner(arr);
    console.log(product);
}
productOfArray([5,4,3,2,1]);