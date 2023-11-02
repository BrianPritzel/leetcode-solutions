import { expect, test } from "vitest"
import { majorityElement } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [3, 2, 3]
    const expectedNums = 3

    //act
    const k = majorityElement(nums)

    //assert
    expect(k).toBe(expectedNums)
})

test("example 2", () => {
    //arrange
    const nums = [2, 2, 1, 1, 1, 2, 2]
    const expectedNums = 2

    //act
    const k = majorityElement(nums)

    //assert
    expect(k).toBe(expectedNums)
})