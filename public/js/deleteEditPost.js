const blogID = document.querySelector('#blog-id').value;

// Deleting your post
const deletePost = async () => {
    await fetch(`/api/blog/delete/${blogID}`, {
        method: 'DELETE'
    })

    window.location.replace('/dashboard')
}

// Updating your post
const updatePost = async () => {
    await fetch()
}

document.querySelector('#delete-btn')
    .addEventListener('click', deletePost);