import { expect, test, vi } from "vitest"
import { memoize } from "../src/main.js"

test("example 1", () => {
    //arrange
    const expected = 5
    const mockFn = vi.fn().mockImplementationOnce(() => expected)
    const memoizedFn = memoize(mockFn)
    const args = [2, 3]

    //act
    const actual1 = memoizedFn(...args)
    const actual2 = memoizedFn(...args)
    
    //assert
    expect(actual1).toBe(expected)
    expect(actual2).toBe(expected)
    expect(mockFn).toHaveBeenCalledTimes(1)
})
test("example 2", () => {
    //arrange
    const expected = 24
    const factorial = vi.fn((n) => (n <= 1) ? 1 : (n * factorial(n - 1)))
    const memoizedFn = memoize(factorial)
    const args = 4

    //act
    const actual1 = memoizedFn(args)
    const actual2 = memoizedFn(args)

    //assert
    expect(actual1).toBe(expected)
    expect(actual2).toBe(expected)
    expect(factorial).toHaveBeenCalledTimes(4)
})