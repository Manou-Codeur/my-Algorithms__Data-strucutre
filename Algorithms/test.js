function caeserCipher(str, k) {
  let newSrt = "";
  k = k % 26;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  str
    .toLowerCase()
    .split("")
    .forEach(element => {
      let index = alphabet.split("").indexOf(element);
      if (element === " ") newSrt += " ";
      else {
        let newIndex = index + k;
        if (newIndex > 25) newIndex -= 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        newSrt += alphabet[newIndex];
      }
    });
  console.log(newSrt);
}
// caeserCipher('Javascript', -27  );

function ReverseWords(str) {
  let final = [];
  function inner(input) {
    let tst = [];
    for (let i = input.length - 1; i >= 0; i--) {
      tst.push(input.split("")[i]);
    }
    return tst.join("");
  }
  str.split(" ").forEach(els => final.push(inner(els)));
  console.log(final.join(" "));
}
// ReverseWords('hello world of code')

function reverseArrInPlace(arr) {
  if (arr.length === 1) return arr[0].toString();
  return reverseArrInPlace(arr.slice(1)) + "," + arr[0];
}
// console.log(reverseArrInPlace([1,2,3,4,5,6,7,8,9,10]))

function meanMedianMode(arr) {
  function mean(input) {
    let total = 0;
    for (let els of input) {
      total += els;
    }
    return total / input.length;
  }

  function mode(input) {
    let myObj = {};
    for (let els of input) {
      if (!myObj[els]) myObj[els] = 1;
      else myObj[els]++;
    }
    let greatest = 0;
    let greatestItem;
    for (let els in myObj) {
      if (myObj[els] > greatest) {
        greatest = myObj[els];
        greatestItem = els;
      }
    }
    return parseInt(greatestItem);
  }

  function median(input) {
    if (input.length % 2 !== 0) return input[Math.floor(input.length / 2)];
    else {
      let first = input.length / 2;
      let second = first - 1;
      return (input[first] + input[second]) / 2;
    }
  }

  console.log({
    mean: mean(arr),
    mode: mode(arr),
    median: median(arr),
  });
}

// meanMedianMode([1,2,3,4,5,4,6,1])
function testOne(arr, sum, final = []) {
  if (arr.length === 1) return;
  for (let els of arr.slice(1)) {
    if (arr[0] + els === sum) {
      final.push([arr[0], els]);
    }
  }
  testOne(arr.slice(1), sum, final);
  return final;
}

// console.log(testOne([1, 6, 4, 5, 3, 3], 7));

function fib(n) {
  //... up to bottom
  // if (memo[n] !== undefined) return memo[n];
  // let result = fib(n - 1, memo) + fib(n - 2, memo);
  // memo[n] = result;
  // return result;

  //... bottom to up
  if (n <= 2) return 1;
  let fibNums = [undefined, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
// console.log(fib(4));

function test(n) {
  let tst = [1];
  let i = 2;
  while (tst.length < n) {
    if (
      tst.indexOf(i / 2) !== -1 ||
      tst.indexOf(i / 3) !== -1 ||
      tst.indexOf(i / 5) !== -1
    ) {
      tst.push(i);
    }
    i++;
  }
  console.log(tst[n - 1]);
  console.log(tst);
}
test(20);
