//IMPLEMENTED A RANGE_BASED LCM CALCULATOR
function smallestCommons(arrOfNum) {
  //[1]
   arrOfNum.sort((a,b) => a - b);
  //[2]
   const [min, max] = arrOfNum;
  //[3]
   const fullArr = Array.from({length: max - min + 1}, (_, i) => min + i);
  //[4]
   const getGdc = (a, b) => {return b === 0 ? a : getGdc(b, a % b)};
  //[5]
   const final = fullArr.reduce((total, curr) => total * curr/ getGdc(total, curr));
   return final;
   
}

console.log(smallestCommons([5, 1]));

//[1]sorted an array in ascending order
//[2]destructuring an array for better access
//[3]I use from method as replacement to for loop
//[4]a helper function to get Greatest Common Divisor
//[5]Used reduce method to accumulate the final output based on the range of the parameter