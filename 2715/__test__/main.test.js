import { expect, test } from "vitest"
import { cancellable } from "../src/main.js"

test("example 1", () => {
    const result = []

    const fn = (x) => x * 5
    const args = [2], t = 20, cancelT = 50

    const start = performance.now() 

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({"time": diff, "returned": fn(...argsArr)})
    }

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelT)

    setTimeout(() => {
        cancel()
    }, cancelT)

    setTimeout(() => {
        expect(result).toEqual([{"time":20,"returned":10}])
    }, maxT + 15)
})

test("example 2", () => {
    const result = []

    const fn = (x) => x**2
    const args = [2], t = 100, cancelT = 50

    const start = performance.now() 

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({"time": diff, "returned": fn(...argsArr)})
    }

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelT)

    setTimeout(() => {
        cancel()
    }, cancelT)

    setTimeout(() => {
    expect(result).toEqual([])
    }, maxT + 15)
})
test("example 3", () => {
    const result = []

    const fn = (x1, x2) => x1 * x2
    const args = [2,4], t = 30, cancelT = 100

    const start = performance.now() 

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({"time": diff, "returned": fn(...argsArr)})
    }

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelT)

    setTimeout(() => {
        cancel()
    }, cancelT)

    setTimeout(() => {
    expect(result).toEqual([{"time":30,"returned":8}])
    }, maxT + 15)
})