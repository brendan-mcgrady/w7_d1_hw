import Vue from 'vue';

  document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: "#app",
      data: {
        toDos: [
          {toDoItem: "Pit oan a washin", priority: false},
          {toDoItem: "Take the dug oot fur a walk", priority: false},
          {toDoItem: "Git onnit", priority: true}
        ],
        newToDo: ""
      },
      methods: {
        saveNewToDo: function(){
          let newToDo = {toDoItem: this.newToDo, priority: false}
          this.toDos.push(newToDo)
          this.newToDo = ""
        },

        toDoPriority: function(index){
          this.toDos[index].priority = true
        }
      }
    })
  })
