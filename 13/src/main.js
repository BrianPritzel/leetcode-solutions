export function romanToNum(s) {
    const vals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0
    let last = 1
    for (let i = s.length - 1, j = 0; i >= 0; i--) {
        if (vals[s[i]] < last) {
            total = total - vals[s[i]]
        } else total = total + vals[s[i]], last = vals[s[i]]
    }
    return total
};