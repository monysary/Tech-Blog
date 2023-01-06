// Posting new blog
const createNewBlog = async (event) => {
    event.preventDefault();

    const newBlogTitle = document.querySelector('#new-blog-title').value.trim();
    const newBlogContent = document.querySelector('#new-blog-content').value.trim();

    if (newBlogTitle && newBlogContent) {
        const response = await fetch('/api/blog/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({newBlogTitle, newBlogContent})
        });

        document.location.reload();
    }
};

document.querySelector('#new-blog')
    .addEventListener('click', createNewBlog);