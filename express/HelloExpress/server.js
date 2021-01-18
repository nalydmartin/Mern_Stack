const express = require("express");
const app = express();
const port = 8000;

const users = [
  {name: "Dylan"},
  {name: "Nick"},
  {name: "Eric"},
  {name: "Marvin"},
  {name: "Daniel;"},

]

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// req is short for request
// res is short for response
app.get("/api/:id", (req, res) => {
  // res.send("Our express api server is now sending this over to the browser");
  // users.push(req.body);
  res.json(users[req.params.id]);
  });

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
