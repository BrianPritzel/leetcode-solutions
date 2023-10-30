import { expect, test } from "vitest"
import { addTwoPromises } from "../src/main.js"

//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

test("example 1", async () => {
    const promise1 = Promise.resolve(2,20)
    const promise2 = Promise.resolve(5,60)
    const result = await addTwoPromises(promise1, promise2)
    expect(result).toEqual(7)
})

test("example 2", async () => {
    const promise1 = Promise.resolve(10,50)
    const promise2 = Promise.resolve(-12,30)
    const result = await addTwoPromises(promise1, promise2)
    expect(result).toEqual(-2)
})