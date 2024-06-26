function fib(a) {
    if (typeof(a) !== 'number' || !Number.isInteger(a) || a < 0 ) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < a; i++) {
        if (i + 1 === a) {
            result += `${first}`;
        } else {
            result += `${first}`;
        }

        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}
console.log(fib(10));