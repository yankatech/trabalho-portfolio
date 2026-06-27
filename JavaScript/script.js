// ==================== VALIDAÇÃO E ENVIO DO FORMULÁRIO ====================

// Captura elemento do formulário pelo ID
const form = document.getElementById("formContato");

// Adiciona um escutador de eventos para capturar quando o usuário envia o formulário
form.addEventListener("submit", function (e) {
  e.preventDefault();   // Impede o comportamento padrão do formulário (recarregar a página)

// Captura os valores digitados nos inputs e remove espaços extras nas pontas (.trim())
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

// Verificação de Campos Vazios: Impede o envio se algum campo não estiver preenchido
  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos!");
    return; // Interrompe a execução da função
  }

// Validação do formato do E-mail 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).");
    return; // Interrompe a execução se o e-mail estiver errado
  }


// Envio dos dados através da API do EmailJS utilizando os IDs do serviço e template
  emailjs.send("service_cz2syqf", "template_qhh0sjh", {
    from_name: nome,
    from_email: email,
    message: mensagem
  })
  .then(() => {
        // Alerta o usuário em caso de sucesso e limpa os campos
    alert("Mensagem enviada com sucesso!");
    form.reset();
  })

  .catch((error) => {
        // Alerta o usuário em caso de falha técnica no envio
    alert("Erro ao enviar mensagem.");
    console.log(error);
  });
 
});


//=================== MODO ESCURO =================

// Obtém o botão que alterna o tema da página
const btnTheme = document.getElementById("toggleTheme");

// Carregar preferência salva: Verifica se o usuário já tinha ativado o modo escuro antes
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Adiciona o evento de clique ao botão do modo escuro
btnTheme.addEventListener("click", () => {
    // Alterna a classe 'dark-mode' no body
  document.body.classList.toggle("dark-mode");

  // Salva a escolha do usuário no LocalStorage do navegador para persistir ao recarregar
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark"); // Salva preferência escura
  } else {
    localStorage.setItem("theme", "light"); // Salva preferência clara
  }
});

  