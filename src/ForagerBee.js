var ForagerBee = function() {
  this = new Bee();
  this.age = 10;
  this.job = 'job';
  this.canFly = true;
  this.treasureChest = [];
  this.forage = function(treasure){
    this.treasureChest.push(treasure);
  }
};

