var tarefasApp = new Vue({
  el: "#tarefasApp",
  data: {
    tarefas: [
      { titulo: "Desenvolver API para o sistema", pronta: false },
      { titulo: "Criar controle de acesso", pronta: false },
      { titulo: "Desenvolver a view", pronta: false },
      { titulo: "Enviar novas mudanças para o servidor", pronta: false },
      { titulo: "Teste", pronta: false },
    ],
    novaTarefa: {
      titulo: '',
      pronta: false
    }
  },
  methods: {
    addTarefa: function(e) {
      e.preventDefault()
      let tarefa = {
        titulo: this.novaTarefa.titulo,
        pronta: false
      }
      this.tarefas.push(tarefa)
      this.novaTarefa.titulo = ''
    },
    removerTarefa: function(tarefa) {
      this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
    }
  }
});