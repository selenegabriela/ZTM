class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length;
    }

    pop(){
        const item = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--;
        return item;
    }
// length 3
// 0 1 2
// index 1

    shiftItems(index){
        for(let i = index; i < this.length-1; i++){   
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
    }

    delete(index){
        const item = this.data[index]
        if(this.length-1 === index){
            this.pop()
        } else {
            this.shiftItems(index);
        }
        return item;
    }
}

const arr1 = new MyArray();

arr1.push('hola')
arr1.push('hehe')
arr1.push('maza')

console.log(arr1.delete(0))
console.log(arr1)
