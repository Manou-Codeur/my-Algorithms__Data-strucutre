function test (arr1, arr2, x) {
    let lowset = Math.abs(arr1[0] + arr2[0] - x);
    let pair = [];

    for (let els1 of arr1) {
        for (let els2 of arr2) {
            if (Math.abs(els1 + els2 - x) < lowset) {
                lowset = Math.abs(els1 + els2 - x);
                pair = [els1, els2];
            }
        }
    }
    console.log(pair)
}
test([1,4,7,9], [10,20,30,40], 20);