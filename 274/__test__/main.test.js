import { expect, test } from "vitest"
import { hIndex } from "../src/main.js"

test("example 1", () => {
    //arrange
    const citations = [3,0,6,1,5]

    //act
    const result = hIndex(citations)
    
    //assert
    expect(result).toEqual(3)
})

test("example 2", () => {
    //arrange
    const citations = [1,3,1]

    //act
    const result = hIndex(citations)
    
    //assert
    expect(result).toEqual(1)
})

test("example 3", () => {
    //arrange
    const citations = [1]

    //act
    const result = hIndex(citations)
    
    //assert
    expect(result).toEqual(1)
})