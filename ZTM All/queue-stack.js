// class CrazyQueue {
//     constructor() {
//         this.first = [];
//         this.last = [];
//     }

//     enqueue(value) {
//         const length = this.first.length;

//         for (let i = 0; i < length; i++) {
//             this.last.push(this.first.pop());
//         }

//         this.last.push(value);

//         return this;
//     }

//     dequeue() {
//         const length = this.last.length;

//         for (let i = 0; i < length; i++) {
//             this.first.push(this.last.pop());
//         }

//         this.first.pop();

//         return this;
//     }

//     peek() {
//         if (this.first.length > 0) {
//             return this.first[this.first.length - 1];
//         }

//         return this.last[0];
//     }
// }


class QueueStack {
    constructor(){
        this.first = []
        this.last = []
    }

    enqueue(value){
        const length = this.first.length;

        for(let i = 0; i < length; i++){
            this.last.push(this.first.pop())
        }
        this.last.push(value)
    }
    dequeue(){
        const length = this.last.length;
        
        for(let i = 0; i < length; i++){
            this.first.push(this.last.pop())
        }
        return this.first.pop()
    }
    peek(){
        if(this.first.length){
            return this.first[this.first.length - 1]
        }

        return this.last[0]
    }
}

const myQueue = new QueueStack();
console.log(myQueue.peek());
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
console.log(myQueue.peek());
console.log("========");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
myQueue.enqueue('Panqué');
console.log(myQueue.dequeue());
console.log("========");
console.log(myQueue.peek())
console.log(myQueue.dequeue());

console.log(myQueue);