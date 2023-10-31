import { expect, test, vi } from "vitest"
import { debounce } from "../src/main.js"

test("example 1", () => {
    //arrange
    vi.useFakeTimers();
    const t = 50;
    const calls = [
        {"t": 50, inputs: [1]},
        {"t": 75, inputs: [2]}
    ];
    const expected = [{"t": 125, inputs: [2]}];
    let actual = [];
    let start = Date.now();
    function log(...inputs) { 
        actual.push({"t": Date.now() - start, inputs });
    }
    const dlog = debounce(log, t);
    //act
    calls.forEach((call) => {
        setTimeout(() => dlog(...call.inputs), call.t);
    })
    vi.runAllTimers();
    //assert
    expect(actual).toEqual(expected);
})

test("example 2", () => {
    //arrange
    vi.useFakeTimers();
    const t = 20;
    const calls = [
        {"t": 50, inputs: [1]},
        {"t": 100, inputs: [2]}
    ];
    const expected = [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}];
    let actual = [];
    let start = Date.now();
    function log(...inputs) { 
        actual.push({"t": Date.now() - start, inputs });
    }
    const dlog = debounce(log, t);
    //act
    calls.forEach((call) => {
        setTimeout(() => dlog(...call.inputs), call.t);
    })
    vi.runAllTimers();
    //assert
    expect(actual).toEqual(expected);
})

test("example 3", () => {
    //arrange
    vi.useFakeTimers();
    const t = 150;
    const calls = [
        {"t": 50, inputs: [1, 2]},
        {"t": 300, inputs: [3, 4]},
        {"t": 300, inputs: [5, 6]}
    ];
    const expected = [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}];
    let actual = [];
    let start = Date.now();
    function log(...inputs) { 
        actual.push({"t": Date.now() - start, inputs });
    }
    const dlog = debounce(log, t);
    //act
    calls.forEach((call) => {
        setTimeout(() => dlog(...call.inputs), call.t);
    })
    vi.runAllTimers();
    //assert
    expect(actual).toEqual(expected);
})