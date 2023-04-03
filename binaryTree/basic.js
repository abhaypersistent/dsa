// Root : beacuse its has no parent
// leaf: Its not has any child
// Edges
// Parent and Child Relative position
// Binary at most 2 children can have less than 2 children
// Exactly 1 root 
// Exatcly 1 path between root and the Node
// Empty tree as Binary tree with zero node
// 


class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// depth first row
// left and right child for the graph
// DFS : a,b,d means go deaper 
// a,b,d,e,c,f like a stack
// stack : top on the top of the stack
// Time O(n)
// space O(n)
// iterative
const depthFirstValue = (root) => {

    if(root === null) return [];
    const arr = [root];

    while(arr.length > 0){
        const current = arr.pop();
        console.log(current.val);
        
        if(current.right){
            arr.push(current.right);
        }
        if(current.left){
            arr.push(current.left);
        }

    }
}

const depthFirstValueRec = (root) => {

    if(root === null){
        return [];
    }

    const left = depthFirstValueRec(root.left);
    const right = depthFirstValueRec(root.right);

    return [root.val, ...left, ...right];
}

var data = [
    {
        img :'https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/6963100/96a02c56-db7d-4dd4-a1c3-9cd0850e0181/frame-68-acd8f358-b66a-490c-973f-8cc4251dbd06-11c2e911-759d-4950-bdab-5c6edf7aad1d.png',
        id:'1',
        price:'90',
        title: 'Classic Dress',
        strikePrice:'120',
        off: '25'
    },
    {
        img :'https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/6963100/96a02c56-db7d-4dd4-a1c3-9cd0850e0181/frame-79-6ffc3037-7dbc-4283-b363-7e65004e5421-3c99e223-6851-488d-ba46-e6ba48fdca6f.png',
        id:'2',
        price:'120',
        title: 'Indian Dress',
        strikePrice:'320',
        off: '63'
    },
    {
        img :'https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/6963100/96a02c56-db7d-4dd4-a1c3-9cd0850e0181/frame-67-db68d0d9-51f1-4c28-a144-d15f97667e24-a07518ce-c94e-4da3-94d2-617b8a6751fa.png',
        id:'3',
        price:'120',
        title: 'Lehenga',
        strikePrice:'320',
        off: '60'
    }
]

for(let first of data) {
    console.log(first);
}


// console.log(depthFirstValueRec(a));

test(2)
test3();
function test(a){
    console.log(a);
}

var test3 = function(b){
    console.log(b)
}