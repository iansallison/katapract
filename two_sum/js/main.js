function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++){
    if(numbers.includes(target-numbers[i]) && i !== numbers.lastIndexOf(target-numbers[i])){
      return [i,numbers.lastIndexOf(target-numbers[i])]
    }
  }
}