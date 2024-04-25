function test_get() {
    //const url = "https://script.googleusercontent.com/macros/echo?user_content_key=pBzHvr1eVKfsa0ajdvwNVfGj6p6kx473zwZrvV-eVXb5G230LZCYE887-MuzXC7OAQMyPL_TV8BGWG2vaBMT77m0Au-xb_-mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCjgmyJ5mTmYkXbTOa_NV6RRTf4_J4x6viySO3J2JF7TgUscvus5zYOPpehwqDtynQ&lib=MVsEhW8P4pJs-UzBi9Xnlq3KRT9d30hqB";
    //const url = "https://script.google.com/macros/s/AKfycbyyEc6z2xQ5KIxnR1hYb_EknOT6ltN-tyImawiOfUXwIOHML0wRn3pu1Lx6UUyolvpu/exec";

    //v2   
    const url = "https://script.google.com/macros/s/AKfycbwZT026a99uoqSRtRpaA4I3GxIo-6bl26ORMOmmkk85fzfN40Nv4EzVm1GsX_pbN7PS/exec";
    const url_dev = "https://script.google.com/macros/s/AKfycby-qpy3QomwT-C6Vqf9Dn1k_diPepfPLUYqX1SmMvY/dev";
    /*
        fetch(url,
            {
                redirect: "follow",
                mode: "no-cors",
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(d => d.json())
            .then(d => {
                document.getElementById("app").textContent = d[0].status;
            });
    */


    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });


    //-- done.
}

document.getElementById("btn").addEventListener("click", test_get);
