let fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple'];


filterdArray= fruits.filter((Element)=>{
    return Element.startsWith("a")
})

console.log(filterdArray);