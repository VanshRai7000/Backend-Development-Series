var arr = [10, 13, 13, 23, 94]

//Traverse on each element and get that element
arr.forEach(function (val) { console.log(val) })

//Traverse on each element and get that element and return in the new array
let ans = arr.map(function (val) {
    return val * 10;
})

//Traverse on each element and get that element and return in the new array if the condition is true
var ans = arr.filter(function (val) {
    if (val > 15) {
        return true;
    } else return false;
})

//Traverse on each element and get that element and return the first element which satisfies the condition
var ans = arr.find(function (val) {
    if (val == 13) {
        return val
    }
})

// console.log(typeof(ans));

