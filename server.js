// Setting up dependencies
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Setting up handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'))

// Setting up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// App listening on PORT
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Application listening at http://localhost:${PORT}`));
});