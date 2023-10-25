export function comp(functions) {
    
        return function(x) {
            return functions.reduceRight((currentvalue,currentelement)=> currentelement(currentvalue), x )
        }
}