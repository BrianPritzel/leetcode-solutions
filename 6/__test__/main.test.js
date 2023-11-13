import { expect, test } from "vitest"
import { convert } from "../src/main.js"

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