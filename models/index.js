const User = require('./User');
const BlogEntry = require('./BlogEntry');
const Comment = require('./Comments');

User.hasMany(BlogEntry, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_comment_id'
})

BlogEntry.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogEntry.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogEntry, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_comment_id',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    BlogEntry,
    Comment
};