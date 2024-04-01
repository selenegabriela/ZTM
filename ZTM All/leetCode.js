var isPalindrome = function(x) {
    const intoStr = "" + x;

    for(let i = 0; i<Math.floor(intoStr.length/2); i++){
        console.log(intoStr[i], "-", intoStr[intoStr.length-1-i])
        if(!(intoStr[i]===intoStr[intoStr.length-1-i])) return false
    }

    return true
};

isPalindrome(-121);

console.log("========================================")

var romanToInt = function(s) {
    const I = 1
    const V = 5
    const X = 10
    const L = 50
    const C = 100
    const D = 500
    const M = 1000
    let arabicNumber = 0

    for(let i = s.length-1; i >=0 ; i--){
        if(s[i]==="I") {
            if(s[i+1] && (s[i+1]==="V" || s[i+1]==="X")){
                arabicNumber-=I
            } else {
                arabicNumber+=I
            }
        } else if(s[i]==="V") {
            arabicNumber+=V
        } else if(s[i]==="X") {
            if(s[i+1] && (s[i+1]==="L" || s[i+1]==="C")){
                arabicNumber-=X
            } else {
                arabicNumber+=X
            }
        } else if(s[i]==="L") {
            arabicNumber+=L
        } else if(s[i]==="C") {
            if(s[i+1] && (s[i+1]==="D" || s[i+1]==="M")){
                arabicNumber-=C
            } else {
                arabicNumber+=C
            }
        } else if(s[i]==="D") {
            arabicNumber+=D
        } else if(s[i]==="M") {
            arabicNumber+=M
        }
    }
    return arabicNumber;
};

console.log(romanToInt("LVIII"));