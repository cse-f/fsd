fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data =>console.log(data))
.catch(err=>console.log(err));

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))

