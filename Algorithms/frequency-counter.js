function validAnagram(str1, str2) {
  let myObj = {};
  let isAnagram = true;

  if (str1.length !== str2.length) isAnagram = false;

  for (let els of str1.split("")) {
    if (!myObj[els]) myObj[els] = 1;
    else myObj[els]++;
  }

  for (let els of str2.split("")) {
    if (myObj[els]) myObj[els]--;
    else isAnagram = false;
  }

  console.log(isAnagram);
}
// validAnagram('rat', 'car');

function canSwitchToPalindrom(str) {
  let myObj = {};
  let amountOfOdd = 0;
  for (let els of str.split("")) {
    if (!myObj[els]) myObj[els] = 1;
    else myObj[els]++;
  }
  for (el in myObj) {
    if (myObj[el] % 2 !== 0) amountOfOdd++;
  }
  console.log(amountOfOdd <= 1);
}
// canSwitchToPalindrom('madam');
