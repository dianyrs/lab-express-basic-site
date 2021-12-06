const express = require("express");
const app = express();
const path = require("path");


app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
    res.render("index");
});

app.get('/home', (req, res, next) => {
  res.render('home/home-page');
});

app.get('/about', (req, res, next) => {
    res.render('about/about-page');  
});

app.get('/works', (req, res, next) => {
    res.render('works/works-page');  
});


app.listen(3000, () => console.log("Listening port 3000😊 "));