const express = require('express');
const app = express();

app.get("/greeting/:name", (req, res) => {
    res.send("Hello" + " " + req.params.name)
  })

  app.get("/tip/:total/:tipPercentage", (req, res) => {
      res.send("Your tip is" + " " + req.params.total * (req.params.tipPercentage * 0.01) + " " + "dollars")
  })

app.listen(3000, () => {
    console.log("Express is listening")
});

