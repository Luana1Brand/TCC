const url = "http://localhost:3000"





function login() {
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");
    let body = {
        "email": email.value,
        "senha": senha.value
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
    }

    fetch(url + "/login", options)
        .then(resp => { return resp.json() })
        .then(info => {
            console.log(info)
            if (info.email != undefined) {



                window.localStorage.setItem("user", JSON.stringify(info));


                window.location.href = "../usuario/usuario.html";







            } else {

                alert("USER NÃO ENCONTRADO");


            }





        });

}

