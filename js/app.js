var initialCats = [
{
  clickCount: 0,
  name: "Ross",
  imgSrc: "img/Ross.jpg",
  imgAttribution: "",
  nicknames: ['Roro','SS','Little Dinosor']
},
{
  clickCount: 0,
  name: "Chandler",
  imgSrc: "img/Chandler.jpg",
  imgAttribution: "",
  nicknames: ['Bing','OMG','Fun Guy']
},
{
  clickCount: 0,
  name: "Joey",
  imgSrc: "img/Joey.jpg",
  imgAttribution: "",
  nicknames: ['Little General','Playboy','Italian boy']
},
{
  clickCount: 0,
  name: "Phoebe",
  imgSrc: "img/Phoebe.jpg",
  imgAttribution: "",
  nicknames: ['FUNFUN','Phoephoe','Smelly Cat']
},
{
  clickCount: 0,
  name: "Monica",
  imgSrc: "img/Monica.jpg",
  imgAttribution: "",
  nicknames: ['Momo','Chief','Lala']
},
{
  clickCount: 0,
  name: "Rachel",
  imgSrc: "img/Rachel.jpg",
  imgAttribution: "",
  nicknames: ['Rachel','Shoe','Pretty Girl']
}
]

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

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
  };

  this.setCat = function(){
    self.currentCat(this);
    // console.log('hi');
  };
}

ko.applyBindings(new ViewModel());
