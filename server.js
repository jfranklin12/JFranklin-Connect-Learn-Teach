const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const model = require('./models');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

const PORT = process.env.PORT || 3001;

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('Listening on PORT # http://localhost:3001');
    });
});
