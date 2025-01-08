const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Hi, I am middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });


//logger - morgan
app.use((req, res, next) => {
    req.time = Date.now();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
});

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    throw new Error("ACCESS DENIED!");
};

// app.get("/err", (req, res) => {
//     abcd = abcd;
// });

app.use((err, req, res, next) => {
    console.log(err);
});

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send()
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

//404
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
});