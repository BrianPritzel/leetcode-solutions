import { expect, test } from "vitest"
import { groupBy2 } from "../src/main.js"

test("Example 1", () => {
    // Arrange
    const array = [
        {"id":"1"},
        {"id":"1"},
        {"id":"2"}
    ];
    const fn = function (item) { 
        return item.id; 
    };
    // Act
    const result = groupBy2.call(array, fn);

    // Assert
    expect(result).toEqual({
        "1": [{"id": "1"}, {"id": "1"}],   
        "2": [{"id": "2"}] 
    })

})

test("Example 2", () => {
    // Arrange
    const array = [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9]
    ]
    const fn = function (list) { 
        return String(list[0]); 
    }
    // Act
    const result = groupBy2.call(array, fn);

    // Assert
    expect(result).toEqual({
        "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
    })

})

test("Example 3", () => {
    // Arrange
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const fn = function (n) { 
        return String(n > 5);
    }
    // Act
    const result = groupBy2.call(array, fn);

    // Assert
    expect(result).toEqual({
        "true": [6, 7, 8, 9, 10],
        "false": [1, 2, 3, 4, 5]
    })

})