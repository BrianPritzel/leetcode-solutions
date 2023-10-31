export function debounce(fn, t) {
    let func;
    return function(...args) {
        clearTimeout(func)
        func = setTimeout(() => {
            fn(...args)
        },t)
    }
};