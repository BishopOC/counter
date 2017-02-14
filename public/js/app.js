var counterApp = {
  counter: 0,
  start: function(){
    counterApp.cacheDom();
    counterApp.addEventListeners();
    counterApp.render();
  },
  cacheDom: function(){
    counterApp.deleteButton = document.querySelector('.delete');
    counterApp.addButton = document.querySelector('.add');
    counterApp.numberCounter = document.querySelector('.numberCounter');
    counterApp.resetButton = document.querySelector('.resetButton');
  },
  render: function(){
    counterApp.numberCounter.innerHTML = counterApp.counter;
  },


  addEventListeners: function(){
  counterApp.addButton.addEventListener('click', counterApp.addNumber);
  counterApp.deleteButton.addEventListener('click', counterApp.deleteNumber);
  counterApp.resetButton.addEventListener('click', counterApp.resetNumber);
  },
  addNumber: function(){
    counterApp.counter += 1;
    counterApp.render();
  },
  deleteNumber: function(){
    counterApp.counter -= 1;
    counterApp.render();
  },
  resetNumber: function(){
    counterApp.counter = 0;
    counterApp.render();
  }

};
counterApp.start();
