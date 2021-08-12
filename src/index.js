module.exports = function toReadable (number) {

    let unitsNumber = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let dozensUnitsNumber = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozensNumbers = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number >= 0 && number < 10) {
        return units[number];
    }

    if (number >= 10 && number < 20) {
        return dozensUnitsNumber[number % 10];
    }

    
};
