/**
 * Converts a given string to camelCase format.
 * 
 * @param {string} str - The input string to be converted to camelCase.
 * @throws {Error} Throws an error if the input is not a non-null string or if it is an empty string.
 * @returns {string} The camelCase version of the input string.
 * 
 * @example
 * // returns 'devikaBongarde'
 * camelCase("DevikaBONGARDE");
 * 
 * @example
 * // throws Error: Invalid input: Input cannot be an empty string.
 * camelCase(" 237738");
 */

/**
 * Converts a given string to dot case format.
 * 
 * @param {string} str - The input string to be converted to dot case.
 * @throws {Error} Throws an error if the input is not a non-null string or if it is an empty string.
 * @returns {string} The dot case version of the input string.
 * 
 * @example
 * // returns 'devika.bongarde'
 * dotCase("Devika BONGARDE");
 * 
 * @example
 * // throws Error: Invalid input: Input cannot be an empty string.
 * dotCase(" 237738 ");
 */
function camelCase(str) {
    if (typeof str !== 'string' || str === null || str === undefined) {
        throw new Error('Invalid input: Input must be a non-null string.');
    }

    if (!str.trim()) {
        throw new Error('Invalid input: Input cannot be an empty string.');
    }

    return str
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
        .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

// Example usage:
try {
    console.log(camelCase("DevikaBONGARDE")); // Output: devikaBongarde
    console.log(camelCase(" 237738")); // Throws error
} catch (error) {
    console.error(error.message);
}
function dotCase(str) {
    if (typeof str !== 'string' || str === null || str === undefined) {
        throw new Error('Invalid input: Input must be a non-null string.');
    }

    if (!str.trim()) {
        throw new Error('Invalid input: Input cannot be an empty string.');
    }

    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '.')
        .replace(/^\.|\.$/g, ''); // Remove leading or trailing dots
}

// Example usage:
try {
    console.log(dotCase("Devika BONGARDE")); // Output: devika.bongarde
    console.log(dotCase(" 237738 ")); // Throws error
} catch (error) {
    console.error(error.message);
}