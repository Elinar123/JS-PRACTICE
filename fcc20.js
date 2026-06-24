//SELECTIONSORT
function selectionSort(num){
    for(let i = 0; i < num.length;i++){
         let minimum = i;
         let screenshot;
        for(let j = i + 1; j < num.length; j++){
            if(num[j] < num[minimum]){
                screenshot = num[j];
            }
            
        } 
        num[screenshot] =  num[minimum];
        num[minimum] = num[screenshot];


    }
    return num;
}

const test = selectionSort([7, 4, 6, 9, 3, 6, 2]);
console.log(test);