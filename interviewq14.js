var superHero = "batman"
let realName = "bruce"

console.log(global.superHero); //comes undifned due to v20 of node js in previous version should output batman
console.log(global.realName);//undfiend as let ,const variables do not get automuatically added in global scope