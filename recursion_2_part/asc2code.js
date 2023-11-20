// let ascc

function subSetSc2(p, up){
    if(up.length == 0){
        console.log(p);
        return '';
    }

    let ch = up.charAt(0);

    subSetSc2(p+ch, up.substring(1))
    subSetSc2(p, up.substring(1))
    subSetSc2(p + ch.charCodeAt(), up.substring(1))
}


function subSetItterative(arr){
    let output = [[]];

    for (const i of arr) {
        let outputLen = output.length;
        for (let j = 0; j < outputLen; j++) {
            let inte = output[j].slice();
            inte.push(i);
            output.push(inte);
        }
    }
    return output;
}
console.log(subSetItterative([1,2,3]));