export function once(fn) {
    let count = 0

	return function(...args){
        if (count++) return
        return fn(...args)
    }
};