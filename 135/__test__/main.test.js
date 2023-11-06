import { expect, test } from "vitest"
import { candy } from "../src/main.js"

test("example 1", () => {
    //arrange
    const ratings = [1,0,2]

    //act
    const result = candy(ratings)
    
    //assert
    expect(result).toEqual(5)
})

test("example 2", () => {
    //arrange
    const ratings = [1,2,2]

    //act
    const result = candy(ratings)
    
    //assert
    expect(result).toEqual(4)
})