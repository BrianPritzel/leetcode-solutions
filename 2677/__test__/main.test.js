import { expect, test } from "vitest"
import { chunk } from "../src/main.js"
test("example 1", () => {
    //arrange
    const arr = [1,2,3,4,5]
    const size = 1

    //act
    const f = chunk(arr, size);

    //assert
    expect(f).toStrictEqual([[1],[2],[3],[4],[5]])
})

test("example 2", () => {
    //arrange
    const arr = [1,9,6,3,2]
    const size = 3

    //act
    const f = chunk(arr, size);

    //assert
    expect(f).toStrictEqual([[1,9,6],[3,2]])
})

test("example 3", () => {
    //arrange
    const arr = [8,5,3,2,6]
    const size = 6

    //act
    const f = chunk(arr, size);

    //assert
    expect(f).toStrictEqual([[8,5,3,2,6]])
})

test("example 4", () => {
    //arrange
    const arr = []
    const size = 1

    //act
    const f = chunk(arr, size);

    //assert
    expect(f).toStrictEqual([])
})