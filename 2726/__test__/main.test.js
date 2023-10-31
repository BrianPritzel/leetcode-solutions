import { expect, test } from "vitest"
import Calculator from "../src/main.js"

test("example 1", () => {
    //arrange
    const calculator = new Calculator(10)

    //act
    calculator.add(5).subtract(7).getResult()

    //assert
    expect(calculator.getResult()).toEqual(8)
})
test("example 2", () => {
    //arrange
    const calculator = new Calculator(2)

    //act
    calculator.multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100

    //assert
    expect(calculator.getResult()).toEqual(100)
})
test("example 3", () => {
    //arrange
    const calculator = new Calculator(20)

    //act
    const func = () => calculator.divide(0).getResult() // 20 / 0 

    //assert
    expect(func).toThrowError("Division by zero is not allowed")
})