const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

const usersRoute = require("./routes/users.route");

app.use(express.json());

//swagger
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "api-posts",
      description: "API documentation",
      contact: {
        name: "@martin.ignacio.ok",
      },
      servers: ["http://localhost:3000"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//swagger

app.use("/users", usersRoute);

app.listen(3000, () => {
  console.log("Server is lisen!!");
});
