 class Laptop {
    constructor(color,brand,battery,Notification) {
    this.color = color;
    this.brand = brand;
    this.battery = battery;
    this.Notification = Notification;
    this.isturnOn = this.isturnOn;
 }
    isturnOn() {
      this.isturnOn=true;
    }

    isturnOff() {
        this.isturnOn = false;
    }

    charging() {
        if(this.battery < 100) {
            this.battery = 100;
             console.log(`battery is charged ${this.battery} %`);
        } else {
            console.log("Battery is fully charged");
            console.log("Please remove the charger");
        }
    }

 //notification
 Notification() {
    this.Notification += 1;
    console.log(`you have got a ${this.Notification} now`);
 }

 message() {
    console.log("You got a messgae");
 }

 removeNotification() {
    this.Notification=0;
    console.log("Notifications are cleared.......");
 }
  
}


function main() {
    const color = readline();
    const brand = readline();
    const battery = parseInt(readline());
    const Notification = parseInt(readline());

    const laptop1 = new Laptop(color,brand,battery,Notification);
    console.log(laptop1.color);
    console.log(laptop1.brand);
    console.log(laptop1.battery);
    console.log(laptop1.Notification);

    console.log(laptop1.isturnOn());
    laptop1.isturnOn();
    console.log(laptop1.isturnOn());
    laptop1.isturnOff();
    console.log(laptop1.isturnOn());

    console.log(`laptop charged ${laptop1.battery}%`);
    charging();

    laptop1.isturnOn();
    laptop1.getNotification();
    laptop1.message();
    laptop1.getNotification();
    laptop1.removeNotification();
}



class Animal {
  /* Write your code here */
   constructor(species){
       this.species=species;
   }
   eat(){
       console.log(`${this.species} is eating`);
   }
}




class Tiger extends Animal {
  constructor(species, age) {
    super(species);
    this.age = age;
  }

  hunt() {
    console.log(`A ${this.age} years old ${this.species} is hunting`);
  }

  roar() {
    console.log(`${this.species} is roaring`);
  }
}

/* Please do not modify anything below this line */
function main() {
  const species = readLine();
  const age = parseInt(readLine());
  
  const tiger1 = new Tiger(species, age);
  tiger1.eat();
}


//fighter jet.........................
class Aircraft {
  constructor() {
    this.flying = false;
  }

  takeOff() {
    this.flying = true;
  }

  land() {
    this.flying = false;
  }
}


class FighterJet extends Aircraft{
  /* Write your code here */
  constructor(missilesLoaded,missilesFired){
      super();
      this.missiles=missilesLoaded;//5
      this.missilesFired=missilesFired;//sets default flying is false  //2 
  }
   fireMissiles(){
       this.missiles -= this.missilesFired;//it calls to firemissiles() reducess  //5-2
       console.log(`${this.missilesFired} Missiles Fired`);//two fired 10-2=8 
   }
}       

/* Please do not modify anything below this line */

function main() {
  const missilesLoaded = parseInt(readLine());
  const missilesFired = parseInt(readLine());  
  
  const fighterJet = new FighterJet(missilesLoaded, missilesFired); // 5,2 comes
  
  fighterJet.takeOff();// first make ready for fly 
  fighterJet.fireMissiles(); //first output this fired call thrn nexxt 
  console.log(`${fighterJet.missiles} Missiles Left`);
  fighterJet.land(); //at last placed on land by offing tht 
}


function main() {
  const missilesLOaded = parseInt(readline());
  const misselsFired = parseInt(readline());

  const fighterJet = new FighterJet(missilesLOaded,misselsFired);
  fighterJet.takeOff();
  fighterJet.fireMissiles();
  console.log(`${fighterJet.missels} Missels Left..`);
}

class Aircraft {
  constructor() {
    this.flying = false;
  }

  takeOff() {
    this.flying = true;
  }

  land(){
    this.flying = false;
  }
}

class FighterJet extends Aircraft{
   constructor(missilesLOaded,misselsFired) {
      super();
      this.missiles=missilesLOaded;
      this.misselsFired=misselsFired;
   }

   fireMissiles() {
      this.missels -= this.missilesFired;
      console.log(`${this.misselsFired} Missiels Fired.....`);
   }
}


