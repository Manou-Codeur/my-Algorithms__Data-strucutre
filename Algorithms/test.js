function caeserCipher (str, k) {
    let newSrt = "";
    k = k % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str.toLowerCase().split('').forEach(element => {
        let index = alphabet.split('').indexOf(element);
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
        for (let i=input.length-1; i>=0; i--) {
            tst.push(input.split('')[i]);
        }    
        return tst.join('');
    }
    str.split(" ").forEach(els => final.push(inner(els)));
    console.log(final.join(' '));
} 
ReverseWords('hello world of code')