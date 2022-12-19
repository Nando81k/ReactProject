const {pages, users, tags} = require('./seedData.js');

const {sequelize} = require('./db');
const {Page, User, Tag} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(users.map(user => User.create(user)));
        const createdPages = await Promise.all(pages.map(page => Page.create(page)));
        const createdTags = await Promise.all(tags.map(tag => Tag.create(tag)));

        // associate data
        createdPages[0].addTags([createdTags[1]]);
        createdPages[1].addTags([createdTags[0]]);
        createdPages[2].addTags([createdTags[1], createdTags[2]]);
        createdPages[3].addTags([createdTags[2],createdTags[3]]);

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
