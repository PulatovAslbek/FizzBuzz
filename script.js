// const elText = document.querySelector('.text')
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

function fizzBuzz(num) {
  
  
  let fizzBuzzState = 0;
  
  if ( (  num % 3  == 0 ) && ( num != 0 ) ) 
    fizzBuzzState = 1;
  
  if ( ( num % 5  == 0 ) && ( num != 0 ) ) 
    fizzBuzzState = 2;
  
  if ( ( num % 3 == 0 ) && ( num % 5 == 0 ) )
    fizzBuzzState = 3;
  
  if ( fizzBuzzState == 0 )
    return num;

  if ( fizzBuzzState == 1 )
    return "[ " + num + " ]" + " Fizz";
  
  if ( fizzBuzzState == 2 )
    return "[ " + num + " ]" + " Buzz";
    
  if ( fizzBuzzState == 3 )
    return "[ " + num + " ]" + " FizzBuzz"; 

}

function reset() {

document.forms["frm0"].elements[0].value = 1;
document.forms["frm0"].elements[1].value = 1;

}

function check() {

let number = document.forms["frm0"].elements[0].value;
document.forms["frm0"].elements[1].value = fizzBuzz( number );

}
