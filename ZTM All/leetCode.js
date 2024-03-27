var isPalindrome = function(x) {
    const intoStr = "" + x;
    console.log(intoStr);
    for(let i = 0; i<Math.floor(intoStr.length/2); i++){
        console.log(intoStr[i], "-", intoStr[intoStr.length-1-i])
        if(!(intoStr[i]===intoStr[intoStr.length-1-i])) return false
    }

    return true
};

isPalindrome(-121);

console.log(1)