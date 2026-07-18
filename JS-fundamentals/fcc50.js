//IMPLEMENTED A SORTED INDEX FINDER
function getIndexToIns(arr, num) {
  let copyArr = [...arr];
  copyArr.sort((a,b) => a - b);
  let ind = copyArr.findIndex(ar => num <= ar);
  return ind === -1 ? arr.length : ind;
  
}

console.log(getIndexToIns([], 5));