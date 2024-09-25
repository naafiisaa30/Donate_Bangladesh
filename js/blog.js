
// Blog button Clicked
document.getElementById('blog-btn').addEventListener('click', function(event){

    event.preventDefault(); 
    window.location.href = 'blog.html';

})

// Home button clicked
    document.getElementById('home-btn').addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = 'index.html';
    });