//===inefficent, hangs on large numbers===

// function nextBigger(n = 0){
//   let digits = n.toString().split('');
//   let numbers = [];

//   function permute(arr, m = '') {
//     if (arr.length === 0) {
//         numbers.push(m);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         let next = curr.splice(i, 1);
//         permute(curr.slice(), m.concat(next))
//       }
//     }
//   }

//   permute(digits)

//   numbers = [... new Set(numbers.map(x => Number(x)).sort((a,b) => a - b))]

//   return numbers[numbers.indexOf(n)+1] || -1
// }

function nextBigger(n = 0){
    let digits = n.toString().split('').map(x => Number(x));
    let result = -1;
    
    for(i = digits.length-1; i >= 1; i--){
      if(digits[i] > digits[i-1]){
        //need to get *next highest number before that*
        let digit = digits[i];
        let digPos = i;
        for(j = digits.length-1; j>=i; j--){
          if(digits[j]>digits[i-1]){
            digit = digits[j];
            digPos = j;
            break;
          }
        }
        //switch lower with *next* highest
        digits[digPos] = digits[i - 1];
        digits[i-1] = digit;
        digitsEnd = digits.splice(i, digits.length-i).sort((a,b) => a - b);
        result = digits.concat(digitsEnd).join('');
        break;
      }
    }
    
    return Number(result);
}

document.getElementById("demo").innerHTML = nextBigger(414);