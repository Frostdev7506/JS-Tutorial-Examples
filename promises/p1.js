const firstPromise =  new Promise((resolve,reject)=>{
const isGoingGood= false
if(isGoingGood) resolve("eveything going good")
else reject("Everything not going goood")
})


firstPromise.then((promiseValue)=>{
console.log(promiseValue)
}).catch((err)=>{
    console.log(err);
})

