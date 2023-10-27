import { expect, test } from "vitest"
import { expected } from "../src/main.js"
test("example 1", () => {
    //arrange


    //act
    const actual = expected(5).toBe(5)
    //assert
    expect(actual).toBe(true)
})
test("example 2", () => {
    //arrange
    const func = () => expected(5).toBe(null)

    //act

    //assert
    expect(func).toThrowError("Not Equal")
})
test("example 3", () => {
    //arrange


    //act
    const actual = expected(5).notToBe(null)
    //assert
    //5 === 5 so this expression throw the error "Equal".
    expect(actual).toBe(true)
})
