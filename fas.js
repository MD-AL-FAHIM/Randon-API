// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json()) 
//   .then(json => console.log(json))



// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// function result1(){
//     fetch(url)
//   .then(response => response.json()) 
//   .then(data => console.log(data))
// }
const url = 'https://jsonplaceholder.typicode.com/users';

function result1(){
    fetch(url)
  .then(response => response.json()) 
  .then(data => differentiate(data))
}

function differentiate(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}