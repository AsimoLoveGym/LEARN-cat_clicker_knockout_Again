var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'NewBorn';
    } else if (clicks < 50){
      title = 'Infant';
    } else if (clicks < 100){
      title = 'Child';
    } else if (clicks < 200){
      title = 'Teen';
    } else if (clicks < 500){
      title = 'Adult';
    } else {
      title = 'Ninja';
    }
    return title;
  },this);
}

var ViewModel = function(){
  var self = this;
  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Joey',
    imgSrc: 'img/Joey.jpg',
    nicknames:['Chouchou','ErHa','Asimo']
  }));

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
  };
}

ko.applyBindings(new ViewModel());
