// Setting up dependencies
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const hbs = exphbs.create({})
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Setting up sessions
const sess = {
    secret: 'the secret string',
    resave: false,
    saveUninitialized: false
};
app.use(session(sess));

// Setting up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'))

// App listening on PORT
sequelize.sync({ }).then(() => {
    app.listen(PORT, () => console.log(`Application listening at http://localhost:${PORT}`));
});