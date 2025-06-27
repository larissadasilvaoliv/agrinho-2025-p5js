function mostrarMensagem() {
  const div = document.getElementById('mensagem');

  if (div.style.display === 'block') {
    div.style.display = 'none';
  } else {
    div.style.display = 'block';
    div.innerHTML = `
      <p style="color:#4b5320; font-weight:bold; font-size:1.2rem; margin: 0;">
        🌾🐝 A conexão entre o campo e a cidade fortalece nosso futuro sustentável e doce como mel! 🐝🌻
      </p>
    `;
  }
}
