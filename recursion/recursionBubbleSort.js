// recursion bubble sort
function bubbleSort(arr, row,c){
    if(row == 0){
        return;
    }

    if(c < row){
        if(arr[c] > arr[c + 1]){
            let temp = arr[c];
            arr[c] = arr[c + 1];
            arr[c+1] = temp;
        }
        bubbleSort(arr, row, c+1);
        
    }else{
        bubbleSort(arr, row-1,0); 
    }
}

let arr = [4,3,2,1];
console.log(bubbleSort(arr, arr.length - 1, 0));
console.log(arr);