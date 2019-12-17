import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
      {name: "Milk", purchased: false},
      {name: "Cheese", purchased: true},
      {name: "Beans", purchased: false}
    ],
    newItem: ""
    },
    methods: {
      saveNewItem: function(){
        let itemObject = {name: this.newItem, purchased: false}
        this.items.push(itemObject)
        this.newItem = ""
      },

      buyItem: function(index){
        this.items[index].purchased = true
      }
    }
  });
});
