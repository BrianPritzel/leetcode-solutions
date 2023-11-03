export function RandomizedSet() {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(val in this) return false
    this[val]=val
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(val in this){
    delete this[val]
    return true
    }
    return false

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
    let tar = Math.floor(Math.random()*Object.keys(this).length)
    return parseInt(Object.keys(this)[tar])
};