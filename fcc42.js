//SUM ALL NUMBER ALGORITHM
function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let sum = min;

  for(let i = min; i < max; i++){
     sum += i + 1;
  }
  return sum;
}

const test = sumAll([1, 4]);
console.log(test);