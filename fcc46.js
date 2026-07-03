//IMPLEMENTED AN ELEMENT SKIPPER
function dropElements(arr, func) {
     let finalArr = [];
     let goSignal = false
     for(let i = 0; i < arr.length; i++){
       if(func(arr[i])){
        goSignal = true;
       }
       if(goSignal){
        finalArr.push(arr[i]);
       }

     }
     return finalArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));