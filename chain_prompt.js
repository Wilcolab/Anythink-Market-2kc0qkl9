// Function to convert a string to kebab case
function toKebabCase(input) {
    // Validation: Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Convert to kebab case
    return input
        .trim() // Remove leading and trailing whitespace
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()) // Convert camelCase to kebab-case
        .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
        .toLowerCase(); // Convert to lowercase
}

// Test cases
try {
    console.log(toKebabCase("Hello World")); // hello-world
    console.log(toKebabCase("kebabCaseExample")); // kebab-case-example
    console.log(toKebabCase("   Leading and trailing spaces   ")); // leading-and-trailing-spaces
    console.log(toKebabCase("Multiple    Spaces")); // multiple-spaces
    console.log(toKebabCase(123)); // Should throw an error
} catch (error) {
    console.error(error.message);
}