function sumAndLastDivisibleBy3(string) {

    const numbers = string.match(/\d+/g);


    const divisibleBy3 = numbers.filter(num => parseInt(num) % 3 === 0);

    let sum = 0;
    let lastDivisibleBy3 = null;

    if (divisibleBy3.length > 0) {
        sum = divisibleBy3.reduce((acc, curr) => acc + parseInt(curr), 0);
        lastDivisibleBy3 = parseInt(divisibleBy3[divisibleBy3.length - 1]);
    }

    return { sum, lastDivisibleBy3 };
}

const exampleString = "The best 6 of 8 will get 9 points";
const { sum, lastDivisibleBy3 } = sumAndLastDivisibleBy3(exampleString);
console.log("Sum of numbers divisible by 3:", sum);
console.log("Last number divisible by 3:", lastDivisibleBy3);
