//BUILD A MISSING LETTER DETECTOR

function fearNotLetter(letter) {
   const letters = "abcdefghijklmnopqrstuvwxyz";
   const arr = letters.split("");
   const arrOfPar = (letter.split(""));
   const endIndex = arr.indexOf(arrOfPar[0]) + arrOfPar.length + 1;
   const isolateLetters = letters.slice(arr.indexOf(arrOfPar[0]), endIndex);
   //return arrOfPar.length;
      for(let letter of isolateLetters){
        if(arrOfPar.indexOf(letter) === -1){
          return letter;
        }
       }
        
  }

f

const test = fearNotLetter("stvwx");
console.log(test);