function test_get() {

    //const url = "https://script.google.com/macros/s/AKfycbzSOZKBKWzaEjVORtSnZBy6PD2OarMVfOZpKrK3EwczJQl59By6ECvG8csxivA4c6Z9/exec"
    const url = "https://script.google.com/macros/s/AKfycbyFPFISBMXpDB8xhWrpdLt7q8JXr6ETq2g6kiJHWngB4nSxHa8F4ppuvq9xcRACSqZZ/exec";
   
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
    //-- done.
}


function addrow() {
    // {"symbol":"S50M24","timeframe":1,"price":900,"event":"rsi_overbought","indicator_name":"RSI","indicator_value":81}
  
    //const url = "https://script.google.com/macros/s/AKfycbzSOZKBKWzaEjVORtSnZBy6PD2OarMVfOZpKrK3EwczJQl59By6ECvG8csxivA4c6Z9/exec"
    const url = "https://script.google.com/macros/s/AKfycbyFPFISBMXpDB8xhWrpdLt7q8JXr6ETq2g6kiJHWngB4nSxHa8F4ppuvq9xcRACSqZZ/exec";
    
    fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify( {
            symbol: "S50M24",
            timeframe: 5,
            price: 800,
            event: "rsi_overbought",
            indicator_name: "rsi",
            indicator_value: 90.8
            
        } ), // body data type must match "Content-Type" header
    });

    //-- done.
}

document.getElementById("btn").addEventListener("click", test_get);
document.getElementById("btn2").addEventListener("click", addrow);
