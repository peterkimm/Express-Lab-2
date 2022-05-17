// const express = require('express');
// const app = express();

// app.get("/greeting/:name", (req, res) => {
//     res.send("Hello" + " " + req.params.name)
//   });

//   app.get("/tip/:total/:tipPercentage", (req, res) => {
//       res.send("Your tip is" + " " + req.params.total * (req.params.tipPercentage * 0.01) + " " + "dollars")
//   });

//   app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res) => {
//       let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
//       let random = response[Math.floor(Math.random()*response.length)];
//       res.send(`
//       <h1>Will I be a millionaire?</h1>` + random) 
//   });



// app.listen(3000, () => {
//     console.log("Express is listening")
// });

