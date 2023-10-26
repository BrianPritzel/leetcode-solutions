import { expect, test, vi } from "vitest"
import { once } from "../src/main.js"


test("example 1", () => {
    //arrange
    const fn = (a, b, c) => (a + b + c)
    
    
    //act
    const onceFn = once(fn)
    const actual1 = onceFn(1, 2, 3)
    const actual2 = onceFn(2, 3, 6)
    
    //assert
    expect(actual1).toBe(6)
    expect(actual2).toBe(undefined)
})

test("example 2", () => {
    //arrange
    //create a mock function
    const mockFn = vi.fn()
    
    //act
    const onceFn = once(mockFn)
    onceFn(1, 2, 3)
    onceFn(2, 3, 6)

    //assert
    expect(mockFn).toHaveBeenLastCalledWith(1, 2, 3)
    expect(mockFn).toHaveBeenCalledTimes(1)
})