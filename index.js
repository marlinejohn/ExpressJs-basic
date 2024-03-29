const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


app.get('/', (req, res) => {
    res.send('Welcome to my Express.js server!')
})

app.get('/about', (req, res) => {
    res.send('Welcome to my page, an accountant turned web developer')
})

// Serve static files
app.use(express.static('public'));

// greet.. query parameter
app.get('/greet', (req, res) =>{
    const name = req.query.name;
    res.send(`Hello ${name} !`);

})

