document.getElementById('blog-btn').addEventListener('click', function(event){

    //step-2   ----> prevent the reload
    event.preventDefault(); 
    window.location.href = '/blog.html';


})

// Home button clicked
    document.getElementById('home-btn').addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = '/index.html';
    });