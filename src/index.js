module.exports = function toReadable(number) {
    const num = [
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
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function wordsFromNum(number) {
        if (number < 20) {
            return num[number];
        }
        if (number < 100) {
            return tens[Math.floor(number / 10)] + (number % 10 ? " " + num[number % 10] : "");
        };
        if (number < 1000) {
            return (num[Math.floor(number / 100)] + " hundred" + (number % 100 === 0 ? "" : " " + wordsFromNum(number % 100)));
        };
        return wordsFromNum(Math.floor(number / 1000)) + " thousand" + (number % 1000 === 0 ? " " : " " + wordsFromNum(number % 1000));
    };

    return wordsFromNum(number);
}
