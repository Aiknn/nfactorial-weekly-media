
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

getData(postsUrl, 7);

function getData(url, number){
    fetch(url)
    .then(promise => promise.json())
    .then(function(data){
        data.splice(0, number).forEach(item=>{
            console.log(item);
            createPost(item);
        })
    })
    .catch(e=>console.log(e))
}

function createPost(item){
    let post = `
        <div class="post">
        <div class="row">
            <div class="col">
                <div class="author-info">
                    <img src="./images/author.png" alt="autor">
                    <span class="author">Authors name </span>
                    <span class="author-light">in </span>
                    <span class="author">Topics Name · </span>
                    <span class="author-light">7 july</span>
                </div>
                <p class="topic"> </p>
                <p class="text"> <a href="./post.html"><b>read more...</b></a></p>
            </div>
            <div class="col-4">
                <img alt="post_image" src="./images/8.jpg" class="rounded mx-auto d-block img-fluid">
            </div>
        </div>
        <div class="extra">
            <div class="extra-text">
                <button class="button">Java Script</button>
                <p class="author-light centered">12 min read &nbsp; · &nbsp; Selected for you</p>
            </div>
            <div class="extra-boxes">
                <div class="empty-box"></div>
                <div class="empty-box"></div>
                <div class="empty-box"></div>
            </div>
        </div>
        </div>
        <hr>
        `

    const posts = document.getElementById("posts");

    let newPost = post.replace('<p class="topic">', `<p class="topic">${item.title}`);
    newPost = newPost.replace('<p class="text">', `<p class="text">${item.body}`);
    newPost = newPost.replace('<img alt="post_image" src="./images/8.jpg"', `<img alt="post_image" src="./images/${item.id}.jpg"`)
    newPost = newPost.replace('<a href="./post.html">', `<a href="./post.html?id=${item.id}">`)
    posts.innerHTML += newPost;
};



