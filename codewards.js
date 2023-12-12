// no#1

// return masked string
function maskify(cc) {
  let newString = cc.toString();
  console.log(typeof newString);
  if (newString.length > 4) {
    for (let i = 0; i < newString.length - 4; i++) {
      newString[i] = `#`;
    }
  } else {
    return cc;
  }
  return newString;
}

let result = maskify(3213123);
console.log(result);
