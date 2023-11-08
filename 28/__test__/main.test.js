import { expect, test } from "vitest"
import { strStr } from "../src/main.js"

test("example 1", () => {
    //arrange
    const haystack = "sadbutsad"
    const needle = "sad"

    //act
    const result = strStr(haystack, needle)
    
    //assert
    expect(result).toEqual(0)
})

test("example 2", () => {
    //arrange
    const haystack = "leetcode"
    const needle = "leeto"

    //act
    const result = strStr(haystack, needle)

    //assert
    expect(result).toEqual(-1)
})
