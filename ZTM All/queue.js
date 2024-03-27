class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if(this.first) this.first.value
    }
    enqueue(value){
        const node = new Node(value);

        if(this.length===0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;

        }

        this.length++
    }
    dequeue(){
        const value = this.first.value;
        if(!this.length) return null;
        else if(this.last===this.first) {
            this.last = null;
            this.first = null;
            this.length--;
            return value;
        } else {
    
            this.first = this.first.next;
            this.length--;
            return value;
        }
    }

    print(){
        const arr = []
        let current = this.first;

        while(current){
            arr.push(current.value)
            current = current.next;
        }

        console.log(arr);
    }

}

const queue = new Queue();

queue.enqueue("Joy");
console.log(queue.dequeue());
queue.enqueue("Matt");
queue.enqueue("Pavel");
queue.enqueue("Samir");
console.log(queue.print());
console.log(queue);
console.log(queue.dequeue());
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());

console.log(queue);
console.log(queue.print());