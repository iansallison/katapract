function spiralize (n) {
  //create an array of 10 arrays of 10 elements each, filled with 1
  let arr = [];

  for (let i = 0; i < n; i++){
    arr.push(new Array(n).fill(1));
  }

  // ====loop====

  for(let i = 2; i <= n/2; i+=2){
    // (i) change the row [i-1] to second to element (length-i) to 0
    arr[i-1] = arr[i-1].map((e,id)=> (id >= i-2 && id <= n-i) ? 0:e);

    //(ii) change the element (length-i) of every row [i-1] to (length-i) to 0
    arr.forEach((_,id)=>{ (id >= i && id < n-i) ? arr[id][n-i] = 0 : false});

    //(iii) change the second to last row (length-i) to second element [i-1] to 0
    arr[n-i] = arr[n-i].map((e,id) => (id >= i-1 && id <= n-i) ? 0:e);

    //(iv) change the second (i) element from second to last row (length-2) to fourth (i+2) row to 0
    arr.forEach((_,id)=>{ (id >= i+1 && id <= n-i) ? arr[id][i-1] = 0 : false});
  }

  console.table(arr);
	return arr;
}



document.getElementById("demo").innerHTML = spiralize (14);