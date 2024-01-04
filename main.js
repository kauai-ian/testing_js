

export function capitalize(str) {
  return str === "" ? str : str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

export const calculator = {
 add: (a, b) => a + b,
 subtract: (a, b) => a - b,
 multiply: (a, b) => a * b,
 divide: (a, b) => {
    if (b === 0) throw Error("not allowed"); 
    return a / b
  },
}

export function cypher(str, shift) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      let charCode = str[i].charCodeAt();
      let shiftedCharCode = charCode + (shift % 26);

      if (str[i] === str[i].toUpperCase()) {
        if (shiftedCharCode > 90) {
          shiftedCharCode -= 26;
        } else if (shiftedCharCode < 65) {
          shiftedCharCode += 26;
        }
      } else {
        if (shiftedCharCode > 122) {
          shiftedCharCode -= 26;
        } else if (shiftedCharCode < 97) {
          shiftedCharCode += 26;
        }
      }
      result += String.fromCharCode(shiftedCharCode);
    } else {
      result += " ";
    }
  }
  return result;
}

export function getTheAverage(arr) {
  let total = 0;
  
  arr.forEach((item) => {
    total += item;
    
  });
  return total / arr.length;
}

export function getTheMinimum(arr) {
  return Math.min(...arr);
}

export function getTheMaximum(arr) {
    return Math.max(...arr)
}

export function getTheLength(arr) {
    return arr.length;
}
