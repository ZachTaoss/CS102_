// class staff{
//     constructor(name, id, age){
//         this.name = name;
//         this.id = id;
//         this.age = age;
//     }
// }

// class admin extends staff{
//     //Using set makes it not a function 
//     set privilege(access){
//         this.access = access
//     }
// }

// class temp extends staff{
//     set leaveDate(time){
//         this.leaveDate = time
//     }
// }

// let jimmy = new temp("jimmy" , 1224 , 24)
// jimmy.access = true
// console.log(jimmy)


class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with the speed of ${this.speed}`)
    }
    stop(){
        this.speed= 0;
        console.log(`${this.name} is standing still`)
    }
}


class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} is hiding`)
    }
    stop(){
        // This will be used for rabbit.stop() because it overrides the parents which is the class animal
        // to fix this 
        super.stop(); //This is calling the parent stop
        this.hide(); //then it hides 
    }
}

let rabbit = new Rabbit ("Peter");
rabbit.run(10);
rabbit.stop();
rabbit.hide();