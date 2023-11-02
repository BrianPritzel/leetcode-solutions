import { expect, test } from "vitest"
import { rotate } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    const expectedNums = [5, 6, 7, 1, 2, 3, 4]

    //act
    rotate(nums, k)

    //assert
    expect(nums).toEqual(expectedNums)
})

test("example 2", () => {
    //arrange
    const nums = [-1, -100, 3, 99]
    const k = 2
    const expectedNums = [3, 99, -1, -100]

    //act
    rotate(nums, k)

    //assert
    expect(nums).toEqual(expectedNums)
})