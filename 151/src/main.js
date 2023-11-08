export function reverseWords(s) {
    const words = s.replace( /\s\s+/g, ' ' ).trim().split(' ')
    words.reverse()
    return words.join(" ")
};