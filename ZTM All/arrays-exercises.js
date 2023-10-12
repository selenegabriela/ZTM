const twoSum = (nums, target) => {
    const indexes = []
    const neededNumbers = new Map()

    for(let i = 0; i < nums.length; i++){
        if(neededNumbers.has(nums[i])){
            indexes.push(neededNumbers.get(target-nums[i]), i)
        } else {
            neededNumbers.set(target-nums[i], i)
        }
    }
    return indexes;
}

twoSum([3,2,4], 6)

const twoSum2 = (arr, target) => {

    const neededNumbers = new Map() // {1:0, 3:1, 6:2, }

    // [7,5,2,1] target = 8-7 
    for(let i = 0; i < arr.length; i++){
        const numberWeNeed = target-arr[i] // 1 - 3 - 6 - 7
        if(neededNumbers.has(arr[i])){
            return [i,neededNumbers.get(arr[i])]
        } else {
            neededNumbers.set(numberWeNeed,i)
        }
    }
    return [];


}