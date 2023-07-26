const express = require("express");
const { connectDB, connectDb } = require("./config/dbConnection");
const errorhandler = require("./middleware/errorHandler");

const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorhandler);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
