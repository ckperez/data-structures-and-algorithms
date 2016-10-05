'use strict';
//remove duplicates from an array

function noDupes(arr){
  let q = [];
  for (var i = 0; i < arr.length; i++){
    if (q.indexOf(arr[i]) == -1){
      q.push(arr[i]);
    }
  }
  console.log(q);
  return q;
}

let testArr1 = [1,2,2,3,4,5,6,6,7,8,9,9,0,0,1,5,3,7,7];

noDupes(testArr1);
