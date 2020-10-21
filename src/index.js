const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({
        message:'Hello Rafinha'
    });
});

app.listen(3333, () => {
    console.log('backend  started!');
});

