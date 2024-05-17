let fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];


let reducedArray= fruits.reduce((accumulator,currentval)=>{
    return accumulator + "[" + currentval + "]"

},"")

console.log(reducedArray);