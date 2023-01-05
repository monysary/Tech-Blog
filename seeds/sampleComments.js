const { Comment } = require('../models');

const sampleCommentData = [
    {
        content: 'Hi John!',
        user_comment_id: 2,
        blog_id: 1
    },
    {
        content: 'Great blog Jane!',
        user_comment_id: 1,
        blog_id: 2
    }
]

const seedComments = () => Comment.bulkCreate(sampleCommentData);

module.exports = seedComments;