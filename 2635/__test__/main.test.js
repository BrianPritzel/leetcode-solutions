import { expect, test } from "vitest"
import { map } from "../src/main.js"

test("example 1", () => {
    //arrange
    const arr = [1,2,3]
    const fn = function plusone(n) { return n + 1; }

    //act
    const actual = map(arr,fn)

    //assert
    expect(actual).toEqual([2, 3, 4])
})

test("example 2", () => {
    //arrange
    const arr = [1,2,3]
    const fn = function plusI(n, i) { return n + i; }

    //act
    const actual = map(arr,fn)

    //assert
    expect (actual).toEqual([1, 3, 5])
})

test("example 3", () => {
    //arrange
    const arr = [10,20,30]
    const fn = function constant() { return 42; }

    //act
    const actual = map(arr,fn)

    //assert
    expect(actual).toEqual([42, 42, 42])
})