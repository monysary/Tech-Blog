const User = require('./User');
const BlogEntry = require('./BlogEntry');
const Comment = require('./Comments');

User.hasMany(BlogEntry, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

BlogEntry.belongsTo(User, {
    foreignKey: 'user_id'
});

BlogEntry.hasMany(Comment, {
    foreignKey: 'blog_id'
});

Comment.belongsTo(BlogEntry, {
    foreignKey: 'blog_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = {
    User,
    BlogEntry,
    Comment
};