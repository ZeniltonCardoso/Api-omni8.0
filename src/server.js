const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://Zenilton:33515856@cluster0-tskgr.mongodb.net/devs?retryWrites=true&w=majority', {
    useNewUrlParser : true
});
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);