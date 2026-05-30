const express =require("express");
const app=express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get("/getcookies", (req, res) => {
    res.cookie("/getcookies", "cookie value");
    res.send("Hi, I am getcookies");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root")
});

app.use("/users", users);
app.use("/posts", posts);



app.listen(3000, () => {
     console.log("server is listening to 3000")
});