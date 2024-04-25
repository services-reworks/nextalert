function test_get() {

    const url = "https://script.google.com/macros/s/AKfycbzSOZKBKWzaEjVORtSnZBy6PD2OarMVfOZpKrK3EwczJQl59By6ECvG8csxivA4c6Z9/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
    //-- done.
}


function addrow() {

    const url = "https://script.google.com/macros/s/AKfycbzSOZKBKWzaEjVORtSnZBy6PD2OarMVfOZpKrK3EwczJQl59By6ECvG8csxivA4c6Z9/exec"

    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify( {name: "Olivia"} ), // body data type must match "Content-Type" header
    });

    //-- done.
}

document.getElementById("btn").addEventListener("click", test_get);
document.getElementById("btn2").addEventListener("click", addrow);
