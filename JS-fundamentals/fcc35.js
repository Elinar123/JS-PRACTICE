//BUILD A PYRAMID GENERATOR 
function pyramid(str, num, bool) {
        let empty = "\n";
        for(let i = 0; i < num; i++){
          let boool = bool ? (num - 1 - i) : i;
          let string = 2 * boool + 1;
          let space = num - 1 - boool;
          let char = "";
          let spce = "";
          for(let j = 0; j < string; j++){
             char += str;
          }
          for(let k = 0; k < space; k++){
             spce += " ";
          }
          empty += spce + char + "\n";
        }
        return empty;
    

    }
     
     
const test = pyramid("o", 4, true);
console.log(test);