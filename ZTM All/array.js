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
let sel = 'yo soy Selene'

const reverse3 = str => str.split('').reverse().join('') // O(n)
let myName = 'Panqué'
console.log(reverse3('Mazapán'));
console.log([...myName]);

// merge sorted arrays -> [1,3,4,31] [4,6,30]
// i => 3
// j => 2
// 7
const array1 = [1,3,4,31] // -> [1, 3, 4, 4, 6, 30]
const array2 = [4,6,30,32,35]
// [1,3,4,4,6,30]

const mergeSortArrays = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a,b)=> a-b) //O(n)+ O(n log n)
}

const mergeSortArrays2 = (arr1, arr2) => {
    const mergedArr = []
    let i = 0;
    let j = 0;
    while(i < arr1.length || j < arr2.length){
        if(!arr2[j] || arr1[i] < arr2[j]){
            mergedArr.push(arr1[i])
            i++
        } else {
            mergedArr.push(arr2[j])
            j++
        }
    }

    //while(i < arr1.length){
    //    mergedArr.push(arr1[i])
    //    i++
    //}
    //while(j < arr2.length){
    //    mergedArr.push(arr2[j])
    //    j++
    //}
    return mergedArr
}

console.log(mergeSortArrays2(array1,array2));