let value = 5;
let answer = parseInt(prompt("What is the right value?", ""));

function readNumber(){
  let value = 5;
  let answer = parseInt(prompt("What is the right value?", ""));
  if (answer === value) {
    alert("You got it right!")
  } else {
    return readNumber()};
};

//Solution

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);