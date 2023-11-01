import { expect, test } from "vitest"
import { removeElement } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [3,2,2,3];
    const val = 3;

    //act
    const result = removeElement(nums, val);

    //assert
    expect(result).toEqual(2)
})

test("example 2", () => {
    //arrange
    const nums = [0,1,2,2,3,0,4,2];
    const val = 2;

    //act
    const result = removeElement(nums, val);

    //assert
    expect(result).toEqual(5)
})