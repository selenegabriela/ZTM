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
}

const arr1 = new MyArray();

arr1.push('hola')
arr1.push('hehe')
console.log(arr1.get(0))
console.log(arr1.pop())
console.log(arr1)
