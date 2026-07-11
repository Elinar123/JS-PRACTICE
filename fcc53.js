//IMPLEMENT A MATCHING OBJECT FILTER
function whatIsInAName(arrOfObj, sourceObj) {
   const keys = Object.keys(sourceObj);
   const isTheSame = arrOfObj.filter(obj => {
    return keys.every(key => {
      return Object.hasOwn(obj, key) && obj[key] === sourceObj[key]
    });
   });
   return isTheSame;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));