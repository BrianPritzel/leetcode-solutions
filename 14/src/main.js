export function longestCommonPrefix(strs) {
    let ans = ""
    let temp = ""
    if(strs.length == 1) return strs[0]
        for(let i=0;i<strs.length-1;i++){
        inner: for(let j=0;j<strs[i].length;j++){
            if(strs[i][j] === strs[i+1][j]){
                temp += strs[i][j]
            } else break inner
        }
         console.log(temp)
        if(temp.length < 1) return ""
        if(temp.length < ans.length || ans.length<1) ans=temp
        temp=""
    }
    return ans
};