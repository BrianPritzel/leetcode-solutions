import { expect, test, vi } from "vitest"
import { canCompleteCircuit } from "../src/main.js"

test("example 1", () => {
    //arrange
    const gas = [1,2,3,4,5]
    const cost = [3,4,5,1,2]

    //act
    const result = canCompleteCircuit(gas, cost)
    
    //assert
    expect(result).toEqual(3)
})

test("example 2", () => {
    //arrange
    const gas = [2,3,4]
    const cost = [3,4,3]

    //act
    const result = canCompleteCircuit(gas, cost)
    
    //assert
    expect(result).toEqual(-1)
})