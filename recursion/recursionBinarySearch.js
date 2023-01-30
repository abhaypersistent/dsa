function recursionBinarySearch(arr, target, start, end){
    if(start > end){
        return -1;
    }

    let middle = Math.floor((start + (end - start) / 2));

    if(arr[middle] == target){
        return middle;
    }

    if (target < arr[middle]){
        return recursionBinarySearch(arr, target, start, middle - 1);
    } 

    return recursionBinarySearch(arr, target, middle + 1, end);
}

console.log(recursionBinarySearch([1,4,6,8,10,12,16,18,20,22,24], 24, 0, 10));