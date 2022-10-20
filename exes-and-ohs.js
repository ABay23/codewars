// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Mi Initial
function XO(str) {
  let valo = 0;
  let valx = 0;
  const arr = str.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      valo++;
    } else if (arr[i] === 'x') {
      valx++;
    }
  }
  if (valo === valx) {
    return true;
  } else {
    return false;
  }
}

//Efficiency
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
