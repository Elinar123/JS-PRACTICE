//SELECTION SORT
function selectionSort(num){
    for(let i = 0; i < num.length; i++){
        let minIndex = i;
        for(let j = 0 + i; j < num.length; j++){
            if(num[j] < num[minIndex]){
                minIndex = j;
            }
        }
        let temp = num[i];
        num[i] = num[minIndex];
        num[minIndex] = temp;
    }
    return num;
}


const test = selectionSort([7, 4, 6, 9, 3, 6, 2]);
console.log(test);