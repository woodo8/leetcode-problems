function fizzBuzz(n) {
    let list = []
    let line = ""
    n++
    for(let i = 1; i < n; i++ ){
        if(i%3===0){
            line="Fizz";
            if(i%5===0){
                line+="Buzz"
            }
        }else if(i%5===0){
            line = "Buzz"
        }else{
            line=i.toString()
        }
        list.push(line)
    }
    return list
};