const sequelize = require('../config/connection.js');
const seedUsers = require('./sampleUserData');
const seedBlogs = require('./sampleBlogData');
const seedComments = require('./sampleComments');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n-----DATABASE SYNCED-----\n');

    await seedUsers();
    console.log('\n-----SAMPLE USERS SEEDED-----\n');

    await seedBlogs();
    console.log('\n-----SAMPLE BLOGS SEEDED-----\n');
    
    await seedComments();
    console.log('\n-----SAMPLE COMMENTS SEEDED-----\n');
    
    process.exit(0);
}

seedAll();