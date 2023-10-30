import { expect, test } from "vitest"
import { sortBy } from "../src/main.js"

test("example 1", () => {
    const arr = [1,2,3,4,5]
    const fn = (x) => x
    const result = sortBy(arr, fn)
    expect(result).toEqual([1,2,3,4,5])
})
test("example 2", () => {
    const arr = [{"x": 1}, {"x": 0}, {"x": -1}]
    const fn = (d) => d.x
    const result = sortBy(arr, fn)
    expect(result).toEqual([{"x": -1}, {"x": 0}, {"x": 1}])
})
test("example 3", () => {
    const arr = [[3, 4], [5, 2], [10, 1]]
    const fn = (x) => x[1]
    const result = sortBy(arr, fn)
    expect(result).toEqual([[10, 1], [5, 2], [3, 4]])
})