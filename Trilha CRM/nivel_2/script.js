class FiltroEstoque {
  constructor() {
    this.inputBusca = document.getElementById("busca-produto");
    this.linhas = document.querySelectorAll("#tabela-corpo tr");
    this.configurarEvento();
  }

  configurarEvento() {
    this.inputBusca.addEventListener("click", () => {
      this.filtrar();
    });
  }

  filtrar() {
    const termoBusca = this.inputBusca.value.toLowerCase();
    this.linhas.forEach((linha) => {
      const nomeProduto = linha
        .querySelector("td")
        .textContent.toLocaleLowerCase();
      if (nomeProduto.includes(termoBusca)) {
        linha.style.display = "";
      } else {
        linha.style.display = "none";
      }
    });
  }
}

const meuFiltro = new FiltroEstoque();
