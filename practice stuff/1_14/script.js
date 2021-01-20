let calculator = {
    //a: ## THIS IS WHAT this.a IS DOING
    // This is another way of saying caluator because its in the object 
    read(){
        this.a = Number(prompt("What is the first number?" , 0));
        this.b = Number(prompt("What is the second number?",0));
    },
    Sum(){
        return this.a + this.b;
    },
    mul(){
        console.log(`The product of ${this.a} and ${this.b} would be ${this.a * this.b}`)
    }
};

calculator.read();
console.log(`The sum of ${calculator.a} and ${calculator.b} would be ${calculator.Sum()}`);
calculator.mul();

let ladder = {
    step:0,
    up(){if(this.max == undefined || this.step < this.max){
        return this.step++;
    }else{
        return this
    }   
        },
    down(){
        if(this.step > 0){
            return this.step--
        }else{
            return this
        }
    },
    showStep(){
        console.log(`The currect step is ${this.step}`)
    },
    height(max){
        this.max = max
        return this
    }
}

ladder.down().up().down().up().up().showStep()
