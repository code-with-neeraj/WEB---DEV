const express = require('express')
const app = express()
  
 
let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});  

app.get("/", (req ,res) => {
    res.send("Hello, i am root");
});  

app.get("/:username/:id", (req ,res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`
    res.send(htmlStr);
});  

app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`search results for query: ${q}`);
})





// app.get("/apple", (req ,res) => {
//     res.send("you contacted apple path");
// })
// app.get("/orange", (req ,res) => {
//     res.send("you contacted orange path");
// })

// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// })

// app.post("/", (req, res) => {
//     res.send("You sent a post request to root");
// })

// app.use((req, res) => {  
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></li></ul>";
//     res.send(code);
// });





 

 