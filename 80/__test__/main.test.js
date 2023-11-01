import { expect, test } from "vitest"
import { removeDuplicates } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [1, 1, 1, 2, 2, 3]
    const expectedNums = [1, 1, 2, 2, 3]

    //act
    const k = removeDuplicates(nums)

    //assert
    expect(k).toBe(expectedNums.length)
    for (let i = 0; i < k; i++) {
        expect(nums[i]).toBe(expectedNums[i])
    }
})

test("example 2", () => {
    //arrange
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    const expectedNums = [0, 0, 1, 1, 2, 3, 3]

    //act
    const k = removeDuplicates(nums)

    //assert
    expect(k).toBe(expectedNums.length)
    for (let i = 0; i < k; i++) {
        expect(nums[i]).toBe(expectedNums[i])
    }
})