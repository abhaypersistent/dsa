

function fibn(n){
    if (n <= 2){
        return 1;
    }

    return fibn(n - 1) + fibn(n - 2)
}

// memoziation
// solve the little program
// object 

function fibnMemo(n, memo ={}){
    if(n in memo){
        return memo[n];
    }

    if(n <= 2){
        return 1;
    }

    memo[n] = fibnMemo(n - 1, memo) + fibnMemo(n - 2, memo);
    return memo[n]; 
}
console.log(fibnMemo(50));