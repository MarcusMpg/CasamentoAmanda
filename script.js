document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("qrModal");
  const modalTitle = document.getElementById("modalTitle");
  const closeBtn = document.getElementById("closeModal");
  const giftImg = document.getElementById("giftImg");

  // Mapeamento dos presentes para imagens locais
  const giftImages = {
    "Jogo de Panelas": "img/jogo-panelas.png",
    "Cafeteira Elétrica": "img/cafeteira.png",
    "Jogo de Jantar": "img/jogo-jantar.png",
    "Conjunto de Toalhas": "img/toalhas.png",
    "Air Fryer": "img/air-fryer.png",
    "Smart TV 43": "img/smart-tv.png",
  };

  document.querySelectorAll(".gift-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const itemName = this.getAttribute("data-item");
      modalTitle.textContent = itemName;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function atualizarContagemRegressiva() {
    const destino = new Date("2025-09-26T20:00:00");
    const agora = new Date();
    const diff = destino - agora;

    if (diff <= 0) {
      document.getElementById("contador").innerHTML = "Chegou o grande dia!";
      return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("contador").innerHTML = `
      <div class="contador-wrapper">
        <div class="contador-item">
          <div class="contador-valor">${dias}</div>
          <div class="contador-label">Dias</div>
        </div>
        <div class="contador-item">
          <div class="contador-valor">${horas}</div>
          <div class="contador-label">Horas</div>
        </div>
        <div class="contador-item">
          <div class="contador-valor">${minutos}</div>
          <div class="contador-label">Minutos</div>
        </div>
        <div class="contador-item">
          <div class="contador-valor">${segundos}</div>
          <div class="contador-label">Segundos</div>
        </div>
      </div>
    `;
  }

  setInterval(atualizarContagemRegressiva, 1000);
  atualizarContagemRegressiva();
});
