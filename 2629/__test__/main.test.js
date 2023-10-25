import { expect, test } from "vitest"
import { comp } from "../src/main.js"
import { assert } from "console"

test("example 1", () => {
    //arrange
    const functions = [x => x + 1, x => x * x, x => 2 * x]
    const x = 4
    
    //act
    const composed = comp(functions)
    const actual = composed(x)

    //assert
    expect(actual).toBe(65)
})

test("example 2", () => {
    //arrange
    const functions = [x => 10 * x, x => 10 * x, x => 10 * x]
    const x = 1
    
    //act
    const composed = comp(functions)
    const actual = composed(x)
    
    //assert
    expect(actual).toBe(1000)
})

test("example 3", () => {
    //arrange
    const functions = []
    const x = 42
    
    //act
    const composed = comp(functions)
    const actual = composed(x)
    
    //assert
    expect(actual).toBe(42)
})