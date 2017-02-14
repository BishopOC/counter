var counter = {
  updatedCounter: 0,
  start: function(){
    counter.cacheDom();
    counter.addEventListeners();
    counter.render();
  },
  cacheDom: function(){
    counter.deleteButton = document.querySelector('.delete');
    counter.addButton = document.querySelector('.add');
    counter.numberCounter = document.querySelector('.numberCounter');
  },
  render: function(){
    counter.numberCounter.innerHTML = counter.updatedCounter;
  },


  addEventListeners: function(){
  counter.addButton.addEventListener('click', counter.addNumber);
  counter.deleteButton.addEventListener('click', counter.deleteNumber);
  },
  addNumber: function(){
    counter.updatedCounter += 1;
    counter.render();
  },
  deleteNumber: function(){
    counter.updatedCounter -= 1;
    counter.render();
  }



};
counter.start();
