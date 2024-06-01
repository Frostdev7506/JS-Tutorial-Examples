let throwErr= ()=>{
    throw new Error( "Value not prpvided while function call")
}

function printVal(val = throwErr()){
    console.log(val);
}

printVal("ezzy")//ezzy
printVal()//thows error