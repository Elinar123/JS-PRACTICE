//BUILD A TITLE CASE CONVERTER
const titleCase = function(str){
     const arr = str.split(" ");
     let finalSen = [];
     for(let i = 0; i < arr.length; i++){
          let uppercase = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
          finalSen.push(uppercase);

     }
     return finalSen.join(" ");
} 

const test = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
console.log(test);
