function multiplication(num){
    for(let i = 0; i < num; i++){
        let row = "";
        for(let j = 0; j < num; j++){
           let result = (j + 1) * (i + 1);
           row += result + "\t";
        }
         console.log(row);
    }
}

console.log("MULTIPLICATION TABLE");
console.log("-".repeat(90));
multiplication(10)
console.log("-".repeat(90));
