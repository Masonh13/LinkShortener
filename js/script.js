const TABLE = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

/** @type {HTMLInputElement} */
let endpoint = document.getElementById("endpoint");
/** @type {HTMLInputElement} */
let url = document.getElementById("url");

document.getElementById("submit").addEventListener("click", ev =>
{
    let ep = endpoint.value.length != 0 ? "/" + endpoint.value : "/" + "aaaaa".split("").map(() => TABLE[Math.floor(Math.random() * TABLE.length)]).join("");
    fetch("/api/shorten", {
        method: "POST",
        body: JSON.stringify({
            endpoint: ep,
            url: url.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(() => document.getElementById("cock").innerHTML = `${ep}`);
});
