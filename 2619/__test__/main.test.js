import { expect, test } from "vitest"
import { last } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [null, {}, 3];
    
    //act
    const actual = last(nums);

    //assert
    expect(actual).toBe(3);
})
test("example 1", () => {
    //arrange
    const nums = [];
    
    //act
    const actual = last(nums);

    //assert
    expect(actual).toBe(-1);
})
