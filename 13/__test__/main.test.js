import { expect, test } from "vitest"
import { romanToNum } from "../src/main.js"

test("example 1", () => {
    //arrange
    const s = "III"

    //act
    const result = romanToNum(s)
    
    //assert
    expect(result).toEqual(3)
})

test("example 2", () => {
    //arrange
    const s = "LVIII"

    //act
    const result = romanToNum(s)

    //assert
    expect(result).toEqual(58)
})

test("example 3", () => {
    //arrange
    const s = "MCMXCIV"

    //act
    const result = romanToNum(s)

    //assert
    expect(result).toEqual(1994)
})