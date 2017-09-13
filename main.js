//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.status = status
  this.color = color
  this.hungry = hungry
  this.owner = owner
}

let sadie = new Dog("normal", "black", false, "mason");
let moonshine = new Dog(undefined, undefined, true, undefined);
let atticus = new Dog(undefined, undefined, undefined, undefined);
// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function pet(dog){
  this.status = "happy"
}

function Human (dog, cool) {
  this.pet = function(pupGettingPet){
    pupGettingPet.status = "happy"
  }
  this.feed = function(pupGettingFed){
    pupGettingFed.hungry = false
  }
  this.cool = cool
}

// Instances of Human
// Needed: mason, julia

let mason = new Human(sadie, false);
let julia = new Human(moonshine, true);
