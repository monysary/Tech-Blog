const seedUsers = require('./sampleUserData');
const seedBlogs = require('./sampleBlogData');

const sequelize = require('../config/connection.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n-----DATABASE SYNCED-----\n');

    await seedUsers();
    console.log('\n-----SAMPLE USERS SEEDED-----\n');

    await seedBlogs();
    console.log('\n-----SAMPLE BLOGS SEEDED-----\n');

    process.exit(0);
}

seedAll();