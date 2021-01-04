class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Your ninjas name is ${this.name}.`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}.`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`Current Health: ${this.health}.`);
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    showSenseiStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}.`)
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

}

const sensei1 = new Sensei("Nick");
sensei1.showSenseiStats();
sensei1.speakWisdom();


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

