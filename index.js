
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if(nome !== "" && telefone !== "") {

        var tabela = document.getElementById("tabelaContatos").getElementsByTagName("tbody")[0];
      
        var novaLinha = tabela.insertRow();

        var cellNome = novaLinha.insertCell(0);
        var cellTelefone = novaLinha.insertCell(1);

        cellNome.textContent = nome;
        cellTelefone.textContent = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos!");
    }
});