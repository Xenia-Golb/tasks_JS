type Solution<T extends number> = (number: T) => number;

function calculateDigitalRoot(number: number): number {
    let sum = 0;
    while (number > 9) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return number + sum;
}

