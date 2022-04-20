var tarefasApp = new Vue({
  el: "#tarefasApp",
  data: {
    tarefas: [
      { titulo: "Desenvolver API para o sistema", pronta: false },
      { titulo: "Criar controle de acesso", pronta: false },
      { titulo: "Desenvolver a view", pronta: false },
      { titulo: "Enviar novas mudanças para o servidor", pronta: false },
      { titulo: "Teste", pronta: false },
    ]
  }
});