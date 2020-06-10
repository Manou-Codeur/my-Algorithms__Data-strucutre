function tst (arr, n) {
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
tst([1,2,3,4,5,6,7,8,9], 4)