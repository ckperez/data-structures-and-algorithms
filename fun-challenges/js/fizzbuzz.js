// for numbers 1 through 100, print Fizz for numbers divisible by 3, Buzz for
// numbers divisible by 5, FizzBuzz for numbers divisible by both 3 and 5, and
// just the number itself for all other numbers


// implementation 1
function fizzBuzz1() {
  var list = [];
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0){
      console.log('Buzz');
    } else if (i % 3 === 0){
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
  return list;
}

// implementation 2... the ternanator
function fizzBuzz2() {
  var list = [];
  for (var i = 1; i <= 100; i++) {
    console.log(i % 15 === 0 ? 'FizzBuzz' : i % 5 === 0 ? 'Buzz' : i % 3 === 0 ? 'Fizz' : i);
  }
  return list;
}

// implementation 3... the ridiculous one
function fizzBuzz3() {
  var list = [];
  var fbOut = '';
  var f = 'Fizz';
  var b = 'Buzz';
  var count = 100;
  var numOut;

  do {
    if (count % 3 === 0) {
      fbOut += f;
      if (count % 5 === 0) {
        fbOut += b;
      }
      list.push(fbOut);
      fbOut = '';
      count --;
    }

    if (count % 5 === 0) {
      fbOut += b;
      list.push(fbOut);
      fbOut = '';
      count--;
    }

    if (count % 5 != 0 || count % 3 != 0){
      numOut = count;
      list.push(numOut);
      count--;
    }
  } while(count > 0);

  for (var i = 1; i <= list.length; i++) {
    console.log(list[list.length - i]);
  }
}



fizzBuzz1();
fizzBuzz2();
fizzBuzz3();
