'use strict';

//given two numbers, find the placeholder where they differ when rendered in binary, and return the value at that placeholder.

function differentRightmostBit(n, m) {
  let c = 0;
  let result;
  while ((m % 2) === (n % 2)) {
    n = Math.floor(n / 2);
    m = Math.floor(m / 2);
    c++;
  }
  result = Math.pow(2, c);
  console.log(result);
  return result;
}

differentRightmostBit(13, 9);
differentRightmostBit(16, 100);
