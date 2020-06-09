function test (arr1, arr2, x) {
    let lowset = Math.abs(arr1[0] + arr2[0] - x);
    let pair = [];
    let j = 0;

    function innerTest () {
        if (j > arr1.length) return;
        for (let i=0; i<arr2.length; i++) {
            if (Math.abs(arr1[j] + arr2[i] - x) < lowset) {
                lowset = Math.abs(arr1[j] + arr2[i] - x);
                pair = [arr1[j], arr2[i]];
            }
            if (i === arr2.length-1) {
                j++;
                innerTest();
            };
        }

    }
    innerTest();
    console.log(pair);
}
test([1,4,7,9], [10,20,30,40], 20);