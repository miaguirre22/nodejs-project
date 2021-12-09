const express = require("express");

const app = express();

const usersRoute = require("./routes/users.route");

app.use(express.json());

app.use("/users", usersRoute);

app.listen(3000, () => {
  console.log("Server is lisen!!");
});
