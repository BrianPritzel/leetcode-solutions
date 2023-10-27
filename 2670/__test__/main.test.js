import { expect, test } from "vitest"
import { distinctDifferenceArray } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [1,2,3,4,5]
    
    //act
    const f = distinctDifferenceArray(nums);

    //assert
    expect(f).toStrictEqual([-3,-1,1,3,5])
})

/test("example 2", () => {
    //arrange
    const nums = [3,2,3,4,2]

    //act
    const f = distinctDifferenceArray(nums);

    //assert
    expect(f).toStrictEqual([-2,-1,0,2,3])
})