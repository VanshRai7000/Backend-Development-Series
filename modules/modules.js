function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1)
}

// module.exports = {
//     add, sub, fact
// }

module.exports = {
    "addfun": add,
    "subfun": sub,
    "factfun": fact
} 