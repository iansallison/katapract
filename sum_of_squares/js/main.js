function squareSum(numbers){
  return numbers.reduce((p,c) => c**2 + p, 0)
}