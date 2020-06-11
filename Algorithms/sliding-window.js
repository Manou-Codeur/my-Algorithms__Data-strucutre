function getBiggestSum (arr, n) {
    let biggest = null;
    if (arr.length < n) {
        console.log(biggest);
        return;
    }
    let sum = 0;
    for(let i=0; i<n; i++) {
        sum += arr[i];
    }
    biggest = sum;
    let j = 0;
    while (j < arr.length - n) {
        sum -= arr[j];
        sum += arr[j+n]; 
        if (sum > biggest) biggest = sum;
        j ++;
    }
    console.log(biggest);
    
}
// getBiggestSum([1,2,3,4,5,6,7,8,9], 4)

function getLongestStr (str) {
    let myObj = {};
    let theEl = [];
    let length = 0;
    for (let els of str.split('')) {
        if (!myObj[els]) {
            myObj[els] = 1;
            theEl.push(els);
        }else {
            if (theEl.length > length) length = theEl.length;
            delete myObj[els];
            let index = theEl.indexOf(els);
            theEl = theEl.slice(index + 1);
            theEl.push(els);            
            myObj[els] = 1;
        }
    }
    console.log(length);
}
getLongestStr('GEEKSFORGEEKS');