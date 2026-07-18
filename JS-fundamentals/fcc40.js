//IMPLEMENT A UNIQUE SORTED UNION
function removeDuplicate(arr){
  let uni = [];
     for(let i = 0; i < arr.length; i++){
      if(!uni.includes(arr[i])){
         uni.push(arr[i]);
      }
    }
     return uni;
}



function uniteUnique(...args) {
  let unitearr = [];
  for(let i = 0; i < args.length; i++) {
    for(let j = 0; j < args[i].length; j++){
        unitearr.push(args[i][j]);
    }
  }
  let unique = removeDuplicate(unitearr);
  return unique;
}

const test = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test);