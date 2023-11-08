import { expect, test } from "vitest"
import { numToRoman } from "../src/main.js"

test("example 1", () => {
    //arrange
    const num = 3

    //act
    const result = numToRoman(num)
    
    //assert
    expect(result).toEqual("III")
})

test("example 2", () => {
    //arrange
    const num = 58

    //act
    const result = numToRoman(num)

    //assert
    expect(result).toEqual("LVIII")
})

test("example 3", () => {
    //arrange
    const num = 1994

    //act
    const result = numToRoman(num)

    //assert
    expect(result).toEqual("MCMXCIV")
})