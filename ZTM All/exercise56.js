// Given 2 arrays, create a function that let's a user know (true/false) wheter these two arrays contain any common items.

const arr1 =["a", "b","c","d"];
const arr2 =["e","f","y","h"];

const commonNumber = (arr1, arr2) => {
    for(let item in arr1){
        for(let item2 in arr2){
            if(item===item2){
                return true;
            }
        }
    }

    return false;
}

//console.log(commonNumber(arr1, arr2));

// O(n*m)

// BETTER SOLUTION

const commonNumberBest = (arr1, arr2) => {
    const objArr = {}
    arr1.forEach((item) => {
        objArr[item] = item
    })
    console.log(objArr);
    for(let item of arr2){
        if(objArr[item]){
            return true
        }
    }
    return false;
}

console.log(commonNumberBest(arr1, arr2));

// O(n+m)