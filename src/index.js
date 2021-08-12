module.exports = function toReadable(number) {
    let arrBefore9 = [
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
    let arrBefore19 = [
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
    let arrBefore99 = [
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
        return arrBefore9[number];
    }

    if (number >= 10 && number < 20) {
        return arrBefore19[number % 10];
    }

    if (number >= 20 && number < 100) {
        let dozensNumber = arrBefore99[Math.floor(number / 10) - 2];
        let unitsNumber = arrBefore9[number % 10];
        if (number % 10 === 0) {
            return dozensNumber;
        } else {
            return dozensNumber + " " + unitsNumber;
        }
    }

    if (number >= 100 && number < 1000) {
        let hundredNumber = arrBefore9[Math.floor(number / 100)];
        let dozensNumber = arrBefore99[Math.floor(number / 10) % 10];
        let unitsNumber = arrBefore9[number % 10];
        if (Math.floor(number / 10) % 10 === 0 && number % 10 === 0) {
            return hundredNumber + " hundred";
        }
        else if (number % 100 >= 10 && number % 100 < 20) {
            return hundredNumber + " hundred " + arrBefore19[number % 10];
        }
        else if (
            number % 100 >= 20 &&
            number % 100 < 100 &&
            number % 10 === 0
        ) {
            return (
                hundredNumber +
                " hundred " +
                arrBefore99[(Math.floor(number / 10) % 10) - 2]
            );
        } else if (Math.floor(number / 10) % 10 === 0) {
            return hundredNumber + " hundred " + unitsNumber;
        }
        else {
            return (
                hundredNumber +
                " hundred " +
                arrBefore99[(Math.floor(number / 10) % 10) - 2] +
                " " +
                arrBefore9[number % 10]
            );
        }
    }
};

