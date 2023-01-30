function printNum(n){
    if(n > 5){
        return;
    }
    console.log(n);
    printNum(n+1);
}

function fibNociRecur(n){
    if (n < 2){
        return n;
    }

    return fibNociRecur(n - 2) + fibNociRecur(n - 1);
}


console.log(fibNociRecur(6));
