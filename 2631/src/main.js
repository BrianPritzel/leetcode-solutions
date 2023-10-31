export function groupBy2(fn) {
    return this.map(x => ({group:fn(x), data:x}))
    .reduce((acc,curr)=>{
        if(acc[curr.group]){acc[curr.group].push(curr.data)}
        else acc[curr.group] = [curr.data]
         return acc
    }, {})
};