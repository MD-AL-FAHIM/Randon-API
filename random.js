const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then( res => res.json())
    .then( data => displayUsers(data.results))
}

loadUsers();

const displayUsers = users =>{
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML =  `
          <h3>User Name: ${user.name.first} ${user.name.last} ${user.name.title}</h3>
          <p>User Location: ${user.location.city} ${user.location.country} </p>
          <p>User Info </p>
        `;
        usersContainer.appendChild(userDiv)

    }
}