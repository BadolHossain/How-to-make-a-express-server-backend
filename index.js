const express = require("express");
const app = express();
var cors = require('cors')
const port = process.env.PORT || 4000;
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const users = [
  { id: 0, name: " khan", phone: "0190265465" },

  { id: 1, name: "badol khan", phone: "0190265465" },
  { id: 2, name: "raan khan", phone: "0190265465" },
  { id: 3, name: "roble khan", phone: "0190265465" },
  { id: 4, name: "rayhan khan", phone: "0190265465" },
  { id: 5, name: "rimon khan", phone: "0190265465" },
  { id: 6, name: "don khan", phone: "0190265465" },
  { id: 7, name: "ddd khan", phone: "0190265465" },
  { id: 8, name: "badgggaol khan", phone: "0190265465" },
];

app.get("/user", (req, res) => {
  res.send(users);
  
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find(user => user.id == id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port badol ${port}`);
});
