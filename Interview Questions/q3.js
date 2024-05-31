let neeraj = {
name:"Neeraj",
greeet: function(){
    console.log(`Hi this is ${this.name}`);
}
}

let greet = neeraj.greeet

//undefined
// greet()

//"Neeraj"
greet.call(neeraj)