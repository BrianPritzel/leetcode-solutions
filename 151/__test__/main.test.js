import { expect, test } from "vitest"
import { reverseWords } from "../src/main.js"

test("example 1", () => {
    //arrange
    const s = "the sky is blue"

    //act
    const result = reverseWords(s)
    
    //assert
    expect(result).toEqual("blue is sky the")
})

test("example 2", () => {
    //arrange
    const s = "  hello world  "

    //act
    const result = reverseWords(s)

    //assert
    expect(result).toEqual("world hello")
})

test("example 3", () => {
    //arrange
    const s = "a good   example"

    //act
    const result = reverseWords(s)

    //assert
    expect(result).toEqual("example good a")
})