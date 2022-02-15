/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return (temperature = (temperature - 32) * (5 / 9));
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let total = 0;
    let total1 = 0;
    let total2 = 0;
    if (first > 0) {
        total = first;
    } else {
        total = 0;
    }
    if (second > 0) {
        total1 = second;
    } else {
        total1 = 0;
    }
    if (third > 0) {
        total2 = third;
    } else {
        total2 = 0;
    }
    return total + total1 + total2;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}
/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message.endsWith("?") ? true : false;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.toUpperCase() === "YES" || word.toLowerCase() === "yes") {
        return true;
    } else if (word.toUpperCase() === "NO" || word.toLowerCase() === "no") {
        return false;
    } else {
        return null;
    }
}
