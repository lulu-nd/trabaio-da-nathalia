document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
   
    if (nome === "" || email === "" || senha === "") {
        alert("Todos os campos são obrigatórios!");
        return;
    }
   
    alert("Cadastro realizado com sucesso!");
});