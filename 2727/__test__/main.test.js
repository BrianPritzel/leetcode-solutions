import { expect, test } from "vitest"
import { isEmpty } from "../src/main.js"

test("example 1", () => {
    const obj = {"x": 5, "y": 42}
    const result = isEmpty(obj)
    expect(result).toEqual(false)
})

test("example 2", () => {
    const obj = {}
    const result = isEmpty(obj)
    expect(result).toEqual(true)
})

test("example 3", () => {
    const obj = [null, false, 0]
    const result = isEmpty(obj)
    expect(result).toEqual(false)
})
