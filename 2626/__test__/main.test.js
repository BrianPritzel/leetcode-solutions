import { expect, test } from "vitest"
import { reduce } from "../src/main.js"

test("example 1", () => {
    //arrange
    const nums = [1,2,3,4]
    const fn = function sum(accum, curr) { return accum + curr; }
    const init = 0
    
    //act
    const actual = reduce(nums,fn,init)

    //assert
    expect(actual).toBe(10)
})

test("example 2", () => {
    //arrange
    const nums = [1,2,3,4]
    const fn = function sum(accum, curr) { return accum + curr * curr; }
    const init = 100
    
    //act
    const actual = reduce(nums,fn,init)
    
    //assert
    expect(actual).toBe(130)
})

test("example 3", () => {
    //arrange
    const nums = []
    const fn = function sum(accum, curr) { return 0; }
    const init = 25
    
    //act
    const actual = reduce(nums,fn,init)
    
    //assert
    expect(actual).toBe(25)
})