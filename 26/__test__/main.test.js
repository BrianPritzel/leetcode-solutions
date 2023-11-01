import { expect, test } from "vitest"
import { removeDuplicates } from "../src/main.js"

/*
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.*/

test("example 1", () => {
    //arrange
    const nums = [1, 1, 2]
    const expectedNums = [1, 2]
    
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
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const expectedNums = [0, 1, 2, 3, 4]

    //act
    const k = removeDuplicates(nums)

    //assert
    expect(k).toBe(expectedNums.length)
    for (let i = 0; i < k; i++) {
        expect(nums[i]).toBe(expectedNums[i])
    }
})