const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { get404 } = require("./controllers/404");

const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("606b504473f0073a483e8335")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(get404);

mongoose
  .connect(
    "mongodb+srv://aaronnobles:Vg2hJxZ1MMnBVWpy@cluster0.ocpqi.mongodb.net/shop?authSource=admin&replicaSet=atlas-ifv0u0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Aaron",
          email: "aaron.nobles@test.com",
          cart: { items: [] },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });