var plusOne = function (digits) {
    //  create for loop
    for (let i = digits.length - 1; i >= 0; i--) {
        //  check if any number equals to 9
        if (digits[i] < 9) {
            //  if it IS NOT => add + 1 and return the value
            digits[i] = digits[i] + 1
            return digits
        } else {
            //  if it IS => make value of that index equal to 0
            //  and the index before that + 1 (up to the if statement again)
            digits[i] = 0
        }
    }

    //  if every number is equal to 9 until the beginning of array make value of every index equal to 0 and add 1 in the front with unshift
    digits.unshift(1)
    return digits
}
console.log(plusOne([1, 9, 9]))
