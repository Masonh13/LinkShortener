const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const app = express();
var privateKey  = fs.readFileSync('ssl/server.key', 'utf8');
var certificate = fs.readFileSync('ssl/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
app.use(express.json());

for (let item of JSON.parse(String(fs.readFileSync("short.json"))).items)
    app.get(item.endpoint, (req, res) => res.redirect(item.url));

app.get("/", (req, res) =>
{
    return res.end(String(fs.readFileSync("html/index.html")));
});

app.post("/shorten", (req, res) =>
{
    let body = req.body;
    console.log(body);
    let short = JSON.parse(String(fs.readFileSync("short.json")));
    let items = short.items;
    items = items.filter(item => item.endpoint != body.endpoint);
    items.push(body);
    short.items = items;
    fs.writeFileSync("short.json", JSON.stringify(short, null, 4));
    app.get(body.endpoint, (req, res) => res.redirect(body.url));
    return res.end("DID IT LOL IM SO GOOD W RIZZ KAI CENAT FORTNITE SKIBIDI TOILET W RIZZ LIT AMON US FORTNITE DEFUALT DANCE COCK DICK SUCK DICK SUCK DICK SUCK DICK SUCK");
});

app.get("/resources/script.js", (req, res) => res.end(String(fs.readFileSync("js/script.js"))));

let hserver = http.createServer(app);
let hsserver = https.createServer(credentials, app);

hserver.listen(80, "0.0.0.0", () => console.log("WAAKEU P FUILTEHGUDOLIYHGORUIGJVOEOU' VLFDTGV '9ERUO V,HBM SDJG ERUIO"));
hsserver.listen(443, "0.0.0.0", () => console.log("WAAKEU P FUILTEHGUDOLIYHGORUIGJVOEOU' VLFDTGV '9ERUO V,HBM SDJG ERUIO but https maybe perhaps perchance"));