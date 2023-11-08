import { expect, test } from "vitest"
import { longestCommonPrefix } from "../src/main.js"

test("example 1", () => {
    //arrange
    const strs = ["flower","flow","flight"]

    //act
    const result = longestCommonPrefix(strs)
    
    //assert
    expect(result).toEqual("fl")
})

test("example 2", () => {
    //arrange
    const strs = ["dog","racecar","car"]

    //act
    const result = longestCommonPrefix(strs)

    //assert
    expect(result).toEqual("")
})