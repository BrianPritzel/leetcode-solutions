import { expect, test } from "vitest"
import { convert } from "../src/main.js"

/*The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"*/

test("example 1", () => {
    //arrange
    const s = "PAYPALISHIRING"
    const numRows = 3

    //act
    const result = convert(s, numRows)
    
    //assert
    expect(result).toEqual("PAHNAPLSIIGYIR")
})

test("example 2", () => {
    //arrange
    const s = "PAYPALISHIRING"
    const numRows = 4

    //act
    const result = convert(s, numRows)

    //assert
    expect(result).toEqual("PINALSIGYAHRPI")
})

test("example 3", () => {
    //arrange
    const s = "A"
    const numRows = 1

    //act
    const result = convert(s, numRows)

    //assert
    expect(result).toEqual("A")
})