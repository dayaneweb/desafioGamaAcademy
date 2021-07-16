function capturarValores()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    if (localStorage.getItem("name") && localStorage.getItem("email"))
    {
        limpar();
    }

}

function limpar()
{
    let name = document.getElementById("name").value = "";
    let email = document.getElementById("email").value = "";
}