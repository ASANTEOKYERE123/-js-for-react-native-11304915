// arrayManipulation.js

/**
 * Function that processes an array of numbers.
 * - Each even number is squared.
 * - Each odd number is tripled.
 * 
 * @param {number[]} arr - The array of numbers to be processed.
 * @return {number[]} - The new array with processed numbers.
 */
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num ** 2; // Square the even numbers
        } else {
            return num * 3; // Triple the odd numbers
        }
    });
}

/**
 * Function that formats an array of strings based on a corresponding array of numbers.
 * - Capitalize the entire string if the number is even.
 * - Convert the string to lowercase if the number is odd.
 * 
 * @param {string[]} stringArray - The array of strings to be formatted.
 * @param {number[]} numberArray - The array of processed numbers.
 * @return {string[]} - The new array with formatted strings.
 */
function formatArrayStrings(stringArray, numberArray) {
    if (stringArray.length !== numberArray.length) {
        throw new Error("The length of the string array and number array must be equal.");
    }

    return stringArray.map((str, index) => {
        const num = numberArray[index];
        if (num % 2 === 0) {
            return str.toUpperCase(); // Capitalize the entire string if the number is even
        } else {
            return str.toLowerCase(); // Convert the string to lowercase if the number is odd
        }
    });
}

/**
 * Function that creates user profiles.
 * - Each profile contains originalName, modifiedName, and an auto-incremented id starting from 1.
 * 
 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @return {Object[]} - The array of user profile objects.
 */
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("The length of the original names array and modified names array must be equal.");
    }

    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

const strings = ["Hello", "World", "JavaScript", "is", "Awesome"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "awesome"]

const userProfiles = createUserProfiles(strings, formattedStrings);
console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: 'Hello', modifiedName: 'hello' },
//   { id: 2, originalName: 'World', modifiedName: 'WORLD' },
//   { id: 3, originalName: 'JavaScript', modifiedName: 'javascript' },
//   { id: 4, originalName: 'is', modifiedName: 'IS' },
//   { id: 5, originalName: 'Awesome', modifiedName: 'awesome' }
// ]
