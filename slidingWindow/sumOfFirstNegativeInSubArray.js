// let input = [12, -1, -7, 8, -15, 30 , 16 , 28];
// k = 3;
// out put : -1, -1, -7, -15, -15 , 0


let input = [1,3,-1, -3, 5, 3, 6, 7];
let size = input.length;
let k = 3;

const sliding = (arr, k) => {
    const l = [], res = []
    let j = 0, i = 0
    while(j < arr.length) {
      
      //remove all the elements which are less the elm at j
      while(l.length > 0 && l[l.length - 1] < arr[j])
        l.pop()
        
      //push the curr max and elems after it...i.e. potential max elems
      l.push(arr[j])
      
      if(j - i + 1 < k)
        j++
      else if (j - i + 1 == k){
        
        //push the max to res array (which is stored in front of list)
        res.push(l[0])
        
        //check if max elm is getting lost when moving the window
        if(l[0] == arr[i])
          l.shift()
          
         j++
         i++
      }
    }
    return res
  }

