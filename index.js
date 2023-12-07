const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const app = express();
var privateKey  = fs.readFileSync('ssl/server.key', 'utf8');
var certificate = fs.readFileSync('ssl/server.crt', 'utf8');

const PW = "stalindidnothingwrong";

var credentials = {key: privateKey, cert: certificate};
app.use(express.json());

for (let item of JSON.parse(String(fs.readFileSync("short.json"))).items)
    app.get(item.endpoint, (req, res) => res.redirect(item.url));

app.get("/", (req, res) =>
{
    return res.end(String(fs.readFileSync("html/index.html")));
});

app.get("/delete", (req, res) =>
{
    return res.end(String(fs.readFileSync("html/delete.html")));
});

app.post("/api/shorten", (req, res) =>
{
    let body = req.body;
    let short = JSON.parse(String(fs.readFileSync("short.json")));
    let items = short.items;
    items = items.filter(item => item.endpoint != body.endpoint);
    items.push(body);
    short.items = items;
    fs.writeFileSync("short.json", JSON.stringify(short, null, 4));
    app.get(body.endpoint, (req, res) => res.redirect(body.url));
    return res.end("DID IT LOL IM SO GOOD W RIZZ KAI CENAT FORTNITE SKIBIDI TOILET W RIZZ LIT AMON US FORTNITE DEFUALT DANCE COCK DICK SUCK DICK SUCK DICK SUCK DICK SUCK");
});

app.post("/api/delete", (req, res) =>
{
    let body = req.body;
    if (body.pw != PW)
        return res.status(404).end("U FUCKED UP");
    let short = JSON.parse(String(fs.readFileSync("short.json")));
    let items = short.items;
    items = items.filter(item => item.endpoint != body.endpoint);
    short.items = items;
    fs.writeFileSync("short.json", JSON.stringify(short, null, 4));
    return res.end("DID IT LOL IM SO GOOD W RIZZ KAI CENAT FORTNITE SKIBIDI TOILET W RIZZ LIT AMON US FORTNITE DEFUALT DANCE COCK DICK SUCK DICK SUCK DICK SUCK DICK SUCK");
});

app.get("/resources/script.js", (req, res) => res.end(String(fs.readFileSync("js/script.js"))));
app.get("/resources/delete.js", (req, res) => res.end(String(fs.readFileSync("js/delete.js"))));

let hserver = http.createServer(app);
let hsserver = https.createServer(credentials, app);

hserver.listen(80, "0.0.0.0", () => console.log("WAAKEU P FUILTEHGUDOLIYHGORUIGJVOEOU' VLFDTGV '9ERUO V,HBM SDJG ERUIO"));
hsserver.listen(443, "0.0.0.0", () => console.log("WAAKEU P FUILTEHGUDOLIYHGORUIGJVOEOU' VLFDTGV '9ERUO V,HBM SDJG ERUIO but https maybe perhaps perchance"));