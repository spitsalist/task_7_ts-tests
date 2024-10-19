export const reverseStrAndCapitalize = (str: string):string =>{
    return str.charAt(0).toUpperCase() + str.slice(1) + str.split('').reverse().join('').trim()
}
console.log(reverseStrAndCapitalize('hello \n'))