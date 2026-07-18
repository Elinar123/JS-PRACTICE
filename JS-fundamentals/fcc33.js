//BUILD A FIRST ELEMENT FINDER
function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])){
        return arr[i];
    }
    }
  return undefined;

}

const test = findElement([], function(num) { return num > 0; })
console.log(test);
