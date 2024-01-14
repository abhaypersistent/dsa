const gridTraveler = (m,n) =>{
    if (m === 1 && n == 1) return 1;
    if(m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m , n - 1);
}

const gridTravelerMemo = (m,n, memo ={}) =>{
    const key = m + '-'+ n;
    if(memo[key]) return memo[key];
    if (m === 1 && n == 1) return 1;
    if(m === 0 || n === 0) return 0;

    memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m , n - 1, memo);
    return memo[key];
}

// time complexity 
// space complexity

// brute force  memoized
// O(n^n+m)      O(m * n)
// O(n + m)      O(n + m)




console.log(gridTravelerMemo(18,18));
console.log(gridTraveler(18,18));