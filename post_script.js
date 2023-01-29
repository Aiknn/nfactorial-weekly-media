
let postPageUrl = window.location.href;
let url = new URL(postPageUrl);
let id = url.searchParams.get('id'); 

const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

function getPostData(anyUrl){
    fetch(anyUrl)
    .then(promise => promise.json())
    .then(function(data){
        createPost(data);
    })
    .catch(e=>console.log(e))
}

getPostData(postUrl);

function createPost(item){
    let post = 
    `
        <p class="topic"></p>
            <p class="text"></p>    
            <img alt="post_image" src="..." class="rounded mx-auto d-block img-fluid">
    `
    const pers = document.getElementById("pers");

    let newPost = post.replace('<p class="topic">', `<p class="topic">${item.title}`);
    newPost = newPost.replace('<p class="text">', `<p class="text">${item.body}`);
    newPost = newPost.replace('<img alt="post_image" src="..."', `<img alt="post_image" src="./images/${item.id}.jpg"`)
    pers.innerHTML += newPost;
}