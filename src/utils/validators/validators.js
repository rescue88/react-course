//check for empty inputs
export const required = (value) => {
    if(value) return undefined;
    return 'Field is required';
}
//check for max length of input value
export const maxLengthCreator = (maxLen) => (value) => {
    if(value.length > maxLen) return `Max length is ${maxLen} symbols`;
    return undefined;
}
//check for min length of input value
export const minLengthCreator = (minLen) => (value) => {
    if(value.length < minLen) return `Min length is ${minLen} symbols`;
    return undefined;
}