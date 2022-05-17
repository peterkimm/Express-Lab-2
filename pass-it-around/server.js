const express = require('express');
const { range } = require('express/lib/request');
const app = express();


app.get("/", (req, res) => {
    res.send(`
    99 Bottles of beer on the wall
    <a href="http://localhost:3000/98">take one down, pass it around</a>
    `)
});

app.get("/98", (req, res) => {
    // for (i of range(1, 99))

    res.send(`
    98 Bottles of beer on the wall
    <a href="http://localhost:3000/">take one down, pass it around</a>
     `)
})




app.listen(3000, () => {
    console.log("Express listening")
});