// Setting up dependencies
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers })
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Setting up sessions
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: 'the secret string',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 60 * 60 * 1000
//     }
// };
const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
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