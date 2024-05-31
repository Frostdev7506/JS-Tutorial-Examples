const url = 'https://jsonplaceholder.typicode.com/users';

async function getData() { 
    try {
        console.log("one"); // Executes immediately
        let response = await fetch(url); // Waits for fetch to complete
        console.log(response); // Executes after fetch completes

        if (!response.ok) { 
            throw new Error("Not a valid response"); 
        }

        let data = await response.json(); // Waits for JSON parsing to complete
        console.log("data is as follows", data); // Executes after JSON parsing

        console.log("two"); // Executes after logging the data
    } catch (err) {
        console.log("Error", err); // Executes if there's an error
    }
}



getData()
console.log("will print befroe getdata");