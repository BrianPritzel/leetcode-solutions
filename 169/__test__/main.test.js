import { expect, test } from "vitest"
import { majorityElement } from "../src/main.js"

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

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