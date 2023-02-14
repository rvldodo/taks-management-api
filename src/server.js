const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

const PORT = 3000;

// SWAGGER
const swaggerUI = require("swagger-ui-express");
const apiDoc = require("./config/apidocs.json");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDoc));

// import sequelize
const { sequelize } = require("./api/models");

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./api/router/taskRouter"));

app.listen(PORT, async () => {
	console.log(`Server running on port ${PORT}`);
	await sequelize.authenticate(app);
	console.log(`DB connected to server`);
});
