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

// arr1.push('hola')
// arr1.push('hehe')
// arr1.push('maza')

// console.log(arr1.delete(0))
// console.log(arr1)


// Create a function that reverses a sting: 'Hi my name is Selene', should be: eneleS si eman ym iH'

const reverseString = (str) => {

    if (!str || str.length < 2 || typeof str !=='string') return "Hmm, that's not correct"
    let reversStr = ''
    for(let i = str.length-1; i >= 0; i--){
        reversStr += str[i]; 
    }
    return reversStr;
}

const reverseRecur = (str, strReverse) => {
    // Hello 
    // olleh
    if(str==="") return strReverse

    let length = str.length-1
    strReverse = strReverse + str[length]
    str = str.slice(0,-1)
    return reverseRecur(str, strReverse)
}

//console.log(reverseString('Hi my name is Selene')); // O(n)
console.log(reverseRecur('Hi my name is Selene', '')); // O(n)


