export function capitalizeWords(str: string) {
    return str
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
        .join(' '); // Join the array back into a string
}
