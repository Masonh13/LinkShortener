/** @type {HTMLInputElement} */
let endpoint = document.getElementById("endpoint");
let pw = document.getElementById("pw");

document.getElementById("submit").addEventListener("click", ev =>
{
    fetch("/api/delete", {
        method: "POST",
        body: JSON.stringify({
            endpoint: (endpoint.value.startsWith("/") ? "" : "/") + endpoint.value,
            pw: pw.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(() => document.getElementById("cock").innerHTML = `Deleted successfully`).catch(() => document.getElementById("cock").innerHTML = `Delete failed`);
});