import { expect, test } from "vitest"
import { canJump } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [2,3,1,1,4]

    //act
    const result = canJump(nums)
    
    //assert
    expect(result).toEqual(true)
})

test("example 2", () => {
    //arrange
    const nums = [3,2,1,0,4]

    //act
    const result = canJump(nums)
    
    //assert
    expect(result).toEqual(false)
})

test("example 3", () => {
    //arrange
    const nums = [2,0,0]

    //act
    const result = canJump(nums)
    
    //assert
    expect(result).toEqual(true)
})