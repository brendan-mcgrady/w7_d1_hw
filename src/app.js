import Vue from 'vue';

  document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: "#app",
      data: {
        toDos: ["Pit oan a washin", "Take the dug oot fur a walk", "Git onnit"],
        newToDo: ""
      },
      methods: {
        saveNewToDo: function(newToDo){
          newToDo = this.newToDo
          this.toDos.push(newToDo)
        }
      }
    })
  })
