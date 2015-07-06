var RetiredForagerBee = function() {
  this = new ForagerBee();
  this.age = 30;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.honeyPot = 0;
  this.forage = function(){
    return "I am too old, let me play cards instead";
  }
  this.gamble = function(treasure){
      this.treasureChest.push(treasure);
    }
};

