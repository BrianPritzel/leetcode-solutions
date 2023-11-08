import { expect, test } from "vitest"
import { lengthOfLastWord } from "../src/main.js"

test("example 1", () => {
    //arrange
    const s = "Hello World"

    //act
    const result = lengthOfLastWord(s)
    
    //assert
    expect(result).toEqual(5)
})

test("example 2", () => {
    //arrange
    const s = "   fly me   to   the moon  "

    //act
    const result = lengthOfLastWord(s)

    //assert
    expect(result).toEqual(4)
})

test("example 3", () => {
    //arrange
    const s = "luffy is still joyboy"

    //act
    const result = lengthOfLastWord(s)

    //assert
    expect(result).toEqual(6)
})