import { expect, test } from "vitest"
import { isPalindrome } from "../src/main.js"

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

test("Example 1", () => {
    //Arrange
    const s = "A man, a plan, a canal: Panama"

    //Act
    const actual = isPalindrome(s)

    //Assert
    expect(actual).toBe(true)
})

test("Example 2", () => {
    //Arrange
    const s = "race a car"

    //Act
    const actual = isPalindrome(s)

    //Assert
    expect(actual).toBe(false)
})

test("Example 3", () => {
    //Arrange
    const s = " "

    //Act
    const actual = isPalindrome(s)

    //Assert
    expect(actual).toBe(true)
})