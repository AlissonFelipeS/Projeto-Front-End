

// 1. Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();


/*Liga desliga claro e escuro*/
const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  // muda o texto do botão conforme o tema
  if (document.body.classList.contains("escuro")) {
    botaoTema.textContent = "Tema padrão";
  } else {
    botaoTema.textContent = "Tema escuro";
  }
});


//Formulario
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();   // impede a página de recarregar
  document.getElementById("mensagem-enviada").hidden = false;
  formulario.reset();
});
