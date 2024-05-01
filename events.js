var formEvent = document.getElementById("formEvent");

var inputSymbol = document.getElementById("inputSymbol");
var inputTimeframe = document.getElementById("inputTimeframe");
var inputPrice = document.getElementById("inputPrice");
var inputEvent = document.getElementById("inputEvent");

var submitButton = document.getElementById("submitButton");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");


var unknownError = document.getElementById("unknownError");

function afterSubmit(e) {
    e.preventDefault();
    
    if (!formEvent.checkValidity()) {
        event.stopPropagation();
        for (field of formEvent.elements) {
            if (!field.checkValidity()) {
                field.classList.add("is-invalid");
            }
        }
        return;
    }
    //formEvent.classList.add('was-validated')

    for (field of formEvent.elements) {
        field.classList.remove("is-invalid");
    }



    var info = {
        symbol: inputSymbol.value,
        timeframe: inputTimeframe.value,
        price: inputPrice.value,
        event: inputEvent.value
    };

    //var url = "https://script.google.com/macros/s/AKfycbz0YORml7XKrDnXfI_4mBv3a0YFyMZjCxTpeD9XlWeE-pbXe5cqXnAsqUZkhvH0Z5tu/exec";

    // v18
    var url = "https://script.google.com/macros/s/AKfycbxx0jvqQghaDW1aHXQP8PnV-Uu1Q9CEH8BSjCFJfcn1Kq3Ss4ucFpLGcmYJwpmJdvgd/exec";

    buttonText.textContent = "Saving...";
    buttonSpinner.classList.remove("d-none");
    submitButton.disable = true;

    fetch(url, {
        method: "POST",
        cache: "no-cache",
        redirect: "follow",
        body: JSON.stringify(info)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            formEvent.reset();
            buttonText.textContent = "Send";
            buttonSpinner.classList.add("d-none");
            submitButton.disable = false;
        })
        .catch(err => {
            console.log(err);
            console.log("Something went wrong");
            unknownError.classList.remove("d-none");
            setTimeout(function () {
                unknownError.classList.add("d-none");
                buttonText.textContent = "Send";
                buttonSpinner.classList.add("d-none");
                submitButton.disable = false;
            }, 3000);
        });
}

formEvent.addEventListener("submit", afterSubmit);
