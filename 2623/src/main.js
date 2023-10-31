export function memoize(fn) {
    const cache = {}
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache[key] !== undefined) return cache[key]
        const value = fn.apply(this,args)
        cache[key] = value
        return value
    }
};