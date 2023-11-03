import { expect, test, vi } from "vitest"
import { productExceptSelf } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [1,2,3,4]

    //act
    const result = productExceptSelf(nums)
    
    //assert
    expect(result).toEqual([24,12,8,6])
})

test("example 2", () => {
    //arrange
    const nums = [-1,1,0,-3,3]

    //act
    const result = productExceptSelf(nums)
    
    //assert
    expect(result).toEqual([-0,0,9,-0,0])
})