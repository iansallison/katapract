// my answer
// function findUniq(arr) {
//   let ans;
//   arr.some((e,i) => {
//     ans = arr[i];
//     return arr.indexOf(e) === arr.lastIndexOf(e);
//   });
//   return ans;
// }

//lmao why did I forget .find
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}