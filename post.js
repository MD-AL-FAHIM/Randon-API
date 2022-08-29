function loadPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => allPostName(data))
}


function allPostName(posts){
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const divPost = document.createElement('div');
        divPost.classList.add('post');
        divPost.innerHTML = `
        <h4>user-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post ${post.body}</p>
        `;
        postContainer.appendChild(divPost);
    }
}

loadPost();