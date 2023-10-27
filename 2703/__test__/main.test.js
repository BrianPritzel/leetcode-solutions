import { expect, test } from "vitest"
import { argumentsLength } from "../src/main.js"

test("example 1", () => {
    //arrange
    const args = [5]

    //act

    //assert
    expect(argumentsLength(...args)).toBe(1)
})
test("example 2", () => {
    //arrange
    const args = [{}, null, "3"]

    //act

    //assert
    expect(argumentsLength(...args)).toBe(3)
})
