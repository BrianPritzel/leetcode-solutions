export function convert(s, numRows) {
    if(numRows === 1){return s}
    let res = Array(numRows).fill('');
    let forward = false;
    let rows = numRows-1
    for(let i=0,j=0;j<s.length;j++){
        if(i%rows === 0) {forward = !forward}
        res[i]+=s[j]
        if(forward){i++}
        else{i--}
    }
    return res.join('')
};