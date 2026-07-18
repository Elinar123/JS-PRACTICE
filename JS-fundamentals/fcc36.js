//BUILD A GRADEBOOK APP
function getAverage(arr) {
    let totalGrade = 0;
       for(let i = 0; i < arr.length; i++){
          totalGrade += arr[i];
       }
       const avg = totalGrade / arr.length;
       return avg;
}

// const test = getAverage([10, 20, 30, 40, 50, 60, 70, 97]);
// console.log(test);

function getGrade(score) {
  if(score === undefined || score === null){
    return "no score provided";
  }else{
     switch(true){
      case (score === 100):
       return "A+";
       break;
      case (score >= 90):
       return "A";
       break;
      case (score >= 80):
       return "B";
       break;
      case (score >= 70):
       return "C";
       break;
      case (score >= 60):
       return "D";
       break;
      default:
       return "F";
       break;
     }

  }
}
// const test2 = getGrade(48);
// console.log(test2);

function hasPassingGrade(grade) {
    let grades = getGrade(grade);
     if(grade === undefined || grade === null) return grades;
     return grades !== "F";
       

}

// const test3 = hasPassingGrade();
// console.log(test3);

function studentMsg(avg, scores) {
    const scr = getGrade(scores);
    const average = getAverage(avg);
    const result = scr !== "F" ? "You passed the course" : "You failed the course";
    const message = `Class average: ${average}. Your grade: ${scr}. ${result}.`
    return message;
}

// const test4 = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);
// console.log(test4);