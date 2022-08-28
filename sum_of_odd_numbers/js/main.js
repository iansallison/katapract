function rowSumOddNumbers(n) {
	// function firstNumber(x){
  //   return 2*(x-1) <= 0? 1 : (2*(x-1)) + firstNumber(x-1); 
  // }

  // const firstNum = firstNumber(n);

  // function addNum(x){
  //   return x == firstNum? x : x + addNum(x-2);
  // }

  // return addNum(firstNum + 2*(n-1));

  // as fun as recursion is...

  return n**3;
}

document.getElementById("demo").innerHTML = rowSumOddNumbers(42);