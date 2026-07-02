//BUILD AN ODD FIBONACCI SUM CALCULATOR
function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sumAdd = 0;
  
  for(let i=0; curr <= num; i++){
    if(curr % 2 !== 0){
      sumAdd += curr;
     }
   let totalNum = prev + curr;
    prev = curr;
    curr = totalNum;
     
     
  }
  return sumAdd;
}


const test = sumFibs(1000);
console.log(test);