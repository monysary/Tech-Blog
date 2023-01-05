// Adding comments
const commentForm = async (event) => {
    event.preventDefault();

    const commentContent = document.querySelector('#comment-text').value.trim();
    const commentBlogID = document.querySelector('#blog-id').value;

    if(commentContent) {
        const response = await fetch('/api/comments/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({commentContent, commentBlogID})
        })

        document.location.reload();
    }
};

document.querySelector('#blog-id')
    .addEventListener('click', commentForm);