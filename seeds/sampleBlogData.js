const { BlogEntry } = require('../models');

const sampleBlogData = [
    {
        title: "John's Sample Blog",
        content: 'This is a sample blog written by John Doe.',
        user_id: 1
    },
    {
        title: "Jane's Sample Blog",
        content: "This is Jane's sample blog!",
        user_id: 2
    }
]

const seedBlogs = () => BlogEntry.bulkCreate(sampleBlogData);

module.exports = seedBlogs;