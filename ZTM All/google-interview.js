const sumOfTwoItems = (arr, sum) => {

    const set = new Set();

    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])){
            return true
        }
        set.add(sum-arr[i])
    }
    return false
}