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
// productOfArray([6, 2]);

function reverse(str){
    if (str.length === 1) return str;   
    return reverse(str.slice(1)) + str [0];
}
// reverse('hello');

function isPalindrome (str) {
    if (str.length === 1) return true;
    if (str[0] !== str[str.length-1]) return false;
    return isPalindrome(str.slice(1, str.length-1));   
}

console.log(isPalindrome('racecar'));
