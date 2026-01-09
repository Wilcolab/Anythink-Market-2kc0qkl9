function toCamelCase(str) {
    return str
        .replace(/[-_]+/g, ' ') // Replace dashes and underscores with spaces
        .split(' ') // Split the string into words
        .map((word, index) => {
            // Capitalize the first letter of each word except the first one
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(''); // Join the words back together
}

// Example usage:
console.log(toCamelCase('first name')); // firstName
console.log(toCamelCase('user_id')); // userId
console.log(toCamelCase('SCREEN_NAME')); // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber