import express from "express";
import hbs from "hbs";
import process from "process";
import { join } from "path";
import { genPass } from "./utils/functions.js";

// Init nodejs app
const app = express();

// Defining port
const port = process.PORT || 3000;

// Defining different paths
const publicPath = join(process.cwd(), "./public");
const viewsPath = join(process.cwd(), "./templates/views");
const partialsPath = join(process.cwd(), "./templates/partials");

// Setup Express to use handlebars engine + Setup views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup handlebars to use the correct partials directory
hbs.registerPartials(partialsPath);

// Setup Express to use static files from the public folder
app.use(express.static(publicPath));

app.get("", (req, res) => {
  const passLength = Number(req.query.passLength);
  const passSc = req.query.passSc;
  if (passLength <= 28 || !passLength) {
    res.render("index", {
      docTitle: "Home | Password Generator",
      pageTitle: "Generate Password",
      generatedPass: genPass(passLength || 12, passSc || false),
    });
  } else {
    res.send(
      "Error: Password generator only supports a maximum of 28 characters!"
    );
  }
});

app.listen(port, (res) => {
  console.log("Server is up and running...");
});
