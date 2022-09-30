const mongoose = require("mongoose");

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("MongoDB Connected");
  });
