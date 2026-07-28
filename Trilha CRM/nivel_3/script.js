const modal = document.getElementById("modal-detalhes");
const btnFechar = document.querySelector(".fechar");
const tabelaCorpo = document.getElementById("tabela-corpo");

const modalCliente = document.getElementById("modal-cliente");
const modalVencimento = document.getElementById("modal-vencimento");
const modalStatus = document.getElementById("modal-status");

tabelaCorpo.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn-detalhes")) {
    return;
  }

  const linha = event.target.closest("tr");
  const cliente = linha.dataset.cliente;
  const vencimento = linha.dataset.vencimento;
  const status = linha.dataset.status;

  modalCliente.textContent = cliente;
  modalVencimento.textContent = vencimento;
  modalStatus.textContent = status;

  modal.classList.add("mostrar-modal");
});

btnFechar.addEventListener("click", () => {
  modal.classList.remove("mostrar-modal");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("mostrar-modal");
  }
});
