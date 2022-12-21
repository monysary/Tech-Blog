const { User } = require('../models');

const sampleUserData = [
    {
        username: 'johndoe',
        email: 'johndoe@email.com',
        password: 'john123'
    },
    {
        username: 'janedoe',
        email: 'janedoe@email.com',
        password: 'jane123'
    }
]

const seedUsers = () => User.bulkCreate(sampleUserData);

module.exports = seedUsers;