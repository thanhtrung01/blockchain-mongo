const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const itemsRoute = require('./routes/item.js');

const app = express();
require('dotenv').config();
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('common'));
app.use(cors({ origin: true, credentials: true }));

//mail sender detail

app.use('/api/item', itemsRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Backend server is running with Port ${PORT}`);
});
