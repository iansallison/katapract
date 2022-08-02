
function arrayDiff(a, b) {
    return a.filter(function(i){
        return i != b;
    });
  }

return arrayDiff([1,2],[1]);