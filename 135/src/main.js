export function candy(ratings) {
    const candies = ratings.map(x => 1)
    for(let i=1; i<ratings.length; i++){
        if(ratings[i]>ratings[i-1]){
            candies[i]=candies[i-1]+1        }
    }
    for(let j=ratings.length-2;j>=0;j--){
        if(ratings[j]>ratings[j+1]){
            if(candies[j]>candies[j+1]+1) continue
            candies[j]=candies[j+1]+1
        }
    }
    return candies.reduce((a,b)=>a+b)
};