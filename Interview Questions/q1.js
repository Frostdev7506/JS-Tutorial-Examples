// Write a Javascript code / program to call API / URL every 4 minutes during US Central timezone US non-working hours 
// API - URL: https://jsonplaceholder.typicode.com/posts
// US Central non working hours: 11pm to 8am

const url = 'https://jsonplaceholder.typicode.com/posts'


let getUSTime = ()=>{
    return new Date().toLocaleString("en-us",{timeZone:"America/chicago"})
}

let isNonWorkingHour = ()=>{
    let USTime = new Date(getUSTime())
    let hours = USTime.getHours()
    return hours >= 23 || hours <=8
}
let fetchData = async()=>
    {
        let data = await fetch(url)
        if(data.ok){
            jsonData = await data.json()
            console.log(jsonData);
        }
    }
setInterval(async()=>{
    if(isNonWorkingHour()){
       fetchData()
    }
    
},4000 *60)
