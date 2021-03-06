function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(4));

function productOfArray(arr) {
  let product = 1;
  function inner(input) {
    if (input.length === 0) return;
    product *= input[0];
    inner(input.slice(1));
  }
  inner(arr);
  console.log(product);
}
// productOfArray([6, 2]);

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}
// console.log(reverse("hello"));

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}
// console.log(isPalindrome('racecar'));

function flatten(oldArr) {
  const final = [];
  function inner(param) {
    for (let els of param) {
      if (Array.isArray(els)) inner(els);
      else final.push(els);
    }
  }
  inner(oldArr);
  console.log(final);
}
// flatten([[3,4,5],[[9,9,9]],["a,b,c"]]);
function capitalizeWords(array) {
  let tst = [];
  function inner(input) {
    if (input.length === 1) {
      tst.push(input[0].toUpperCase());
      return;
    }
    tst.push(input[0].toUpperCase());
    inner(input.slice(1));
  }
  inner(array);
  console.log(tst);
}

// capitalizeWords(["hello", "world", "good"]);
