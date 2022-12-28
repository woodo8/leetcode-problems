var isAnagram = function (s, t) {

    obj1 = {}
    obj2 = {}

    for (let i of s) {
        obj1[i] = (obj1[i] || 0) + 1
    }
    for (let i of t) {
        obj2[i] = (obj2[i] || 0) + 1
    }

    for(let key in obj1){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }
    for(let key in obj2){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }
    return true

};