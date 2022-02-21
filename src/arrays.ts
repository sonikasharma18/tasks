//import { ImportsNotUsedAsValues, isJSDocThisTag } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newNumbers: number[] = [];
    if (numbers.length == 0) {
        return newNumbers;
    } else if (numbers.length == 1) {
        newNumbers = [numbers[0], numbers[0]];
        return newNumbers;
    } else {
        newNumbers = [numbers[0], numbers[numbers.length - 1]];
        return newNumbers;
    }
}
/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numberArray = numbers.map((numbers: string): number =>
        +numbers ? +numbers : 0
    );
    return numberArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numberArray = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.slice(1) : amount
    );
    const final = numberArray.map((inte: string): number =>
        +inte ? +inte : 0
    );
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    const final = newMessages.map((mess: string): string =>
        mess.includes("!") ? mess.toUpperCase() : mess
    );
    return final;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newWords = words.filter((word: string): boolean => word.length < 4);
    return newWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const newColors = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );
    console.log(newColors);
    if (newColors.length > 0) {
        return false;
    } else {
        return true;
    }
}
/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const final = addends.length > 0 ? addends.join("+") : "0";
    const finalResult = sum + "=" + final;
    return finalResult;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstnegnumIndex = values.findIndex(
        (value: number): boolean => value < 0
    );
    const numsinArray =
        firstnegnumIndex !== -1 ? values.slice(0, firstnegnumIndex) : values;
    const sum = numsinArray.reduce(
        (total: number, num: number) => total + num,
        0
    );

    let newArray = [...values];
    firstnegnumIndex !== -1
        ? newArray.splice(firstnegnumIndex + 1, 0, sum)
        : newArray = [...values, sum];
    return newArray;
}
