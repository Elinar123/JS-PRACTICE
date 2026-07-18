//BUILD LARGEST NUMBER FINDER
function largestOfAll(arr) {
    const largestNums = [];
    for(let i = 0; i < arr.length; i++){
      let biggestNum = arr[i][0];
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > biggestNum){
            biggestNum = arr[i][j];
        }
      }
       largestNums.push(biggestNum);

    }
    return largestNums;
} 

const test = largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
console.log(test);