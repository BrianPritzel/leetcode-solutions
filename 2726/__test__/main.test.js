import { expect, test } from "vitest"
import Calculator from "../src/main.js"

/*Design a test for the Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result.
*/

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