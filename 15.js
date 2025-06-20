let segundos = 0;
let intervalo = null;

function atualizarDisplay() {
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;
  document.getElementById("display").textContent =
    String(min).padStart(2, '0') + ":" + String(seg).padStart(2, '0');
}

function iniciar() {
  if (intervalo === null) {
    intervalo = setInterval(() => {
      segundos++;
      atualizarDisplay();
    }, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  pausar();
  segundos = 0;
  atualizarDisplay();
}

// Atualiza o display no início
atualizarDisplay();