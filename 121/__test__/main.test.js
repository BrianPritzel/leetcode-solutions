import { expect, test } from "vitest"
import { maxProfit } from "../src/main.js"

test("example 1", () => {
    //arrange
    const prices = [7, 1, 5, 3, 6, 4]

    //act
    const result = maxProfit(prices)
    
    //assert
    expect(result).toEqual(5)
})

test("example 2", () => {
    //arrange
    const prices = [7, 6, 4, 3, 1]

    //act
    const result = maxProfit(prices)
    
    //assert
    expect(result).toEqual(0)
})