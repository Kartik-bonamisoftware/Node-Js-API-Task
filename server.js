const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const loginSchema = require("./validation/userValidate");
const mongoURI = "mongodb://localhost:27017/node-tasks";
const validateRequestSchema = require("./validation");
const validate = require("./middleware/userValidator");
const loginRoute = require("./routes/loginRoute");
const userRoute = require("./routes/userRoute");
const registerRoute = require("./routes/registerRoute");
const countRoute = require("./routes/countRoute");

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("MongoDB Connected");
  });

app.post("/api/v1/register", registerRoute);

app.post("/api/v1/login", loginSchema, validateRequestSchema, loginRoute);

app.get("/api/v1/users", validate, userRoute);

app.get("/api/v1/users/role/count", validate, countRoute);

app.listen(5000, () => {
  console.log("Server is running...");
});
