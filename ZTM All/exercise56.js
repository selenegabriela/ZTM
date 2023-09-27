// Given 2 arrays, create a function that let's a user know (true/false) wheter these two arrays contain any common items.
// For saving space
const arr1 =["a", "r","c","d"];
const arr2 =["e","f","c","h"];

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
// Space complexity: (O(1))

// BETTER SOLUTION for saving time

const commonNumberBest = (arr1, arr2) => {
    const objArr = {}
    arr1.forEach((item) => {
        if(!objArr[item]){
            objArr[item] = true
        }
    })

    for(let item of arr2){
        if(objArr[item]){
            return true
        }
    }
    return false;
}


//console.log(commonNumberBest(arr1, arr2));

// O(n+m)
// O(n) - space complexity

// For readability 

const commonNumberBestRead = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item))
}

console.log(commonNumberBestRead(arr1, arr2));