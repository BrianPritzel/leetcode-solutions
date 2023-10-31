import { expect, test } from "vitest"
import { ArrayWrapper } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [[1,2],[3,4]];
    const operation = "Add";
    const expected = 10;

    //act
    const actual = new ArrayWrapper(nums[0]) + new ArrayWrapper(nums[1]);

    //assert
    expect(actual).toBe(expected);
})

test("example 2", () => {
    //arrange
    const nums = [[23,98,42,70]];
    const operation = "String";
    const expected = "[23,98,42,70]";

    //act
    const actual = String(new ArrayWrapper(nums[0]));

    //assert
    expect(actual).toBe(expected);
})

test("example 3", () => {
    //arrange
    const nums = [[],[]];
    const operation = "Add";
    const expected = 0;

    //act
    const actual = new ArrayWrapper(nums[0]) + new ArrayWrapper(nums[1]);

    //assert
    expect(actual).toBe(expected);
})