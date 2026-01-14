function jogador() {
  const input = document.getElementById("inputNome");
  const nomeSpan = document.getElementById("nome");

  nomeSpan.textContent =
    input.value.trim() !== "" ? input.value : "Jogador(a)";
}

function verificarResposta(cardId, grupo, correta) {
  const card = document.getElementById(cardId);
  const selecionada = document.querySelector(
    `input[name="${grupo}"]:checked`
  );

  // Remove estados anteriores
  card.classList.remove("correto", "errado");

  let feedback = card.querySelector(".feedback");
  if (!feedback) {
    feedback = document.createElement("p");
    feedback.className = "feedback";
    card.appendChild(feedback);
  }

  if (!selecionada) {
    feedback.textContent = "⚠️ Selecione uma alternativa";
    feedback.className = "feedback errado";
    card.classList.add("errado");
    return;
  }

  if (selecionada.value === correta) {
    feedback.textContent = "✅ Resposta correta!";
    feedback.className = "feedback correto";
    card.classList.add("correto");
  } else {
    feedback.textContent = `❌ Resposta incorreta. Correta: ${correta}`;
    feedback.className = "feedback errado";
    card.classList.add("errado");
  }
}

function restart() {
    window.location.reload();
}