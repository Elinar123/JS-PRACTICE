//IMPLEMENT A FALSY REMOVER
function bouncer(arr) {
  const newArr = [];
   for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      newArr.push(arr[i])
    }
   }
   return newArr;
}

const test = bouncer([7, "ate", "", false, 9]);
console.log(test);