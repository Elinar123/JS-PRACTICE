//IMPLEMENTING THE SLICE AND SPLICE ALGORITHM
function frankenSplice(firstArr, secondArr, index) {
  const copy = secondArr.slice();
  if(index <= secondArr.length){
    copy.splice(index, 0, ...firstArr);
    return copy;
  }else{
    return 'index exceeds the length of the array';
  }

}

const test = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(test);