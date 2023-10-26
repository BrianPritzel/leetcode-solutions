import { expect, test } from "vitest"
import { filter } from "../src/main.js"

test("example 1", () => {
    //arrange
    const arr = [0, 10, 20, 30]
    const fn = function greaterThan10(n) {return n > 10}

    //act
    const actual = filter(arr,fn)

    //assert
    expect(actual).toEqual([20, 30])
})

test("example 2", () => {
    //arrange
    const arr = [1, 2, 3]
    const fn = function firstIndex(n, i) {return i === 0}

    //act
    const actual = filter(arr,fn)

    //assert
    expect (actual).toEqual([1])
})

test("example 3", () => {
    //arrange
    const arr = [-2, -1, 0, 1, 2]
    const fn = function plusOne(n) {return n + 1}

    //act
    const actual = filter(arr,fn)

    //assert
    expect(actual).toEqual([-2, 0, 1, 2])
})