function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a,b) => a - b).filter((e,i,a) => a.indexOf(e) === i);
}


document.getElementById("demo").innerHTML = mergeArrays([1,2,3,4], [5,6,7,8]);