// describe > it > expect

import {
    getValue,
    substract,
    quotient,
    randomInRage,
    capitalize,
    arrayToString,
    invitation,
    copyArray,
    copyObject,
    objectToArray,
    getEven,
    getOdd,
    arrayToObject,
    sum,
    makeAction
  } from '../app'
  
  describe('Testing utility functions', () => {
  
    it('should getValue & return the input value', () => {
      expect(getValue(42)).toBe(42);
      expect(getValue('hello')).toBe('hello')
    })
  
    it('should  return subtract & difference of two numbers', () => {
      expect(substract(10, 5)).toBe(5)
      expect(substract(5, 10)).toBe(-5)
    })
  
    it('should return the quotient of two numbers', () => {
      expect(quotient(10, 2)).toBe(5)
      expect(quotient(9, 3)).toBe(3)
      expect(() => quotient(10, 0))
    })
  
    it('should return a random number between the range', () => {
      const min = 1
      const max = 10
      const result = randomInRage(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
    })
  
    it('should return a string with the first letter capitalized', () => {
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('HELLO')).toBe('HELLO')
      expect(capitalize('')).toBe('')
    })
  
    it('should return a string from array elements', () => {
      expect(arrayToString([1, 2, 3], '-')).toBe('1-2-3')
      expect(arrayToString(['a', 'b', 'c'], ',')).toBe('a,b,c')
    })
  
    it('should return a formatted string for the user', () => {
      const user = { name: 'John', age: 30 }
      expect(invitation(user)).toBe('Hello! My name is John. I am 30')
    })
  
    it('should return a new copy of the array', () => {
      const arr = [1, 2, 3]
      const newArr = copyArray(arr)
      expect(newArr).toEqual(arr)
      expect(newArr).not.toBe(arr)
    })
  
    it('should return a new copy of the object', () => {
      const obj = { name: 'John', age: 30 }
      const newObj = copyObject(obj)
      expect(newObj).toEqual(obj)
      expect(newObj).not.toBe(obj)
    })
  
    it('should return an array of object values', () => {
      const obj = { name: 'John', age: 30 }
      expect(objectToArray(obj)).toEqual(['John', 30])
    })
  
    it('should return an array of even numbers', () => {
      expect(getEven([1, 2, 3, 4])).toEqual([2, 4])
    })
  
    it('should return an array of odd numbers', () => {
      expect(getOdd([1, 2, 3, 4])).toEqual([1, 3])
    })
  
    it('should return an object where keys and values are from the array', () => {
      expect(arrayToObject(['a', 'b', 'c'])).toEqual({ a: 'a', b: 'b', c: 'c' })
    })
  
    it('should return a function that sums the two numbers', () => {
      const addFive = sum(5)
      expect(addFive(10)).toBe(15)
    })
  
    it('should apply the provided action to the two numbers', () => {
      expect(makeAction(substract, 10, 5)).toBe(5)
      expect(makeAction((a, b) => a * b, 10, 5)).toBe(50); 
    })
  
  })

