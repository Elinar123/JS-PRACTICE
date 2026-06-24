//STRING REPEATING FUNCTION
function repeatStringNumTimes(str, num){
  let row = '';
  if(num <= 0){
    return "";
  }else{
    for(let i = 0; i < num;i++ ){
      row += str;

    }
  }
   return row;
}

const test = repeatStringNumTimes("*", 8);
console.log(test);