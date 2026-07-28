const inputNome = document.getElementById("nome-cliente");
const inputEmail = document.getElementById("email-cliente");
const btnSalvar = document.getElementById("btn-salvar");
const listaContatos = document.getElementById("lista-contatos");

btnSalvar.addEventListener("click", function () {
  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();

  if (!nome) {
    alert("Por favor, informe o nome do cliente");
    return;
  }

  if (!email.includes("@")) {
    alert("Por favor, insira um e-mail válido com @!");
    return;
  }

  const novoCard = document.createElement("div");
  novoCard.classList.add("card-contato");

  novoCard.innerHTML = `<strong>${nome}</strong><br><span>${email}</span>`;

  listaContatos.appendChild(novoCard);

  inputNome.value = "";
  inputEmail.value = "";
  inputNome.focus();
});
