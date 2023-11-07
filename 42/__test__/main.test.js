import { expect, test } from "vitest"
import { trap } from "../src/main.js"

test("example 1", () => {
    //arrange
    const height = [0,1,0,2,1,0,1,3,2,1,2,1]

    //act
    const result = trap(height)
    
    //assert
    expect(result).toEqual(6)
})

test("example 2", () => {
    //arrange
    const height = [4,2,0,3,2,5]

    //act
    const result = trap(height)

    //assert
    expect(result).toEqual(9)
})