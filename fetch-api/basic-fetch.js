const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url).then((res)=>{
if(!res.ok) throw Error("Error: Not valid response")

  return res.json()  
}).then((resObj)=>{
console.log(resObj);
}).catch((err)=>{
    console.log("warning Error:",err);
})