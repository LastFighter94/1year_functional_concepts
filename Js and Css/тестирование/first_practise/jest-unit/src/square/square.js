const square = (number) => {
    if (number === 1){
        return 1
    }

    // return number * number
    return Math.pow(number, 2)
}

module.exports = square;