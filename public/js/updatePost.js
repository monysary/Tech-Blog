const blogID = document.querySelector('#update-blog').value;

// Updating your post
const updatePost = async (event) => {
    event.preventDefault();

    const updateBlogTitle = document.querySelector('#update-blog-title').value;
    const updateBlogContent = document.querySelector('#update-blog-content').value;

    await fetch(`/api/blog/update/${blogID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            updateBlogTitle,
            updateBlogContent
        })
    });

    window.location.replace(`/posts/${blogID}`);
}

document.querySelector('#update-blog')
    .addEventListener('click', updatePost);