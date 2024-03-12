class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek(){
        return this.top.value
    }
    push(value){
        const node = new Node(value)

        if(this.length === 0){
            this.top = node
            this.bottom = node
        } else {
            node.next = this.top
            this.top = node;
        }
        this.length++
    }
    pop(){
        if(this.length===1) this.bottom = null;
        else if(this.length===0) return null;
        const value = this.top.value;
        this.top = this.top.next;
        this.length--;
        return value;
        
    }
}

// const newStack = new Stack()

// newStack.push('Google');
// newStack.push('Udemy');
// newStack.push('Discord');


// console.log(newStack.peek());
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.pop());

// console.log(newStack);

class StackArray {
    constructor(){
        this.arr = []
        //
    }
    peek(){
        return this.arr[this.arr.length-1]
    }
    push(value){
        this.arr.push(value)
    }
    pop(){
        return this.arr.pop()
    }
}

const newStack = new StackArray()

newStack.push('Google');
newStack.push('Udemy');
newStack.push('Discord');


console.log(newStack.peek());
console.log(newStack.pop());
console.log(newStack);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());

console.log(newStack);