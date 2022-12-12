const mongoose = require("mongoose");
const url =
"mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/go-solar?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
