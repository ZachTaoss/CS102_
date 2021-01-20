
//////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////
let names=`Ashanti Huerta
Stan Mustafa
Caspar Irvine
Jaime Flores
Saxon Donovan
Cayden Riddle
Mert Bravo
Zakariya Alvarado
Salahuddin Ellwood
Teejay Hutton
Tilly Glass
Eboni Welsh
Anita Moody
Flora Decker
Antoni Knox
Harvey Velazquez
Farhana Brown
Nathaniel Mcgowan
Nikkita Daly
Guto Hurley
Saul Brook
Bradley Horner
Jason Whitehead
Reece Mason
Lawson Holding
Franklyn Vincent
Mikael Lord
Tyson Lott
Celia Ball
Colton Mccoy
Amy-Louise Appleton
Arisha Novak
Saffa Rodriguez
Alberto Halliday
Anne-Marie Yates
Shauna Philip
Hamaad Hughes
Sahar Thomson
Arnie Weiss
Miya Fisher
Kush Camacho
Ho Garza
Hajrah Castro
Joann Atherton
Addison West
Elle Sandoval
Taryn Howarth
Fannie Gilmour
Keiron Logan
Tara Frame
Teigan Stein
Ahmet Wilson
Seb Davison
Huda Irwin
Aviana Galvan
Sophia Gamble
Lily-Anne Salgado
Masuma Conrad
Harold Savage
Elysia Mosley
Siena Coates
Areeba Harper
Eleanor Rowland
Joe Aguirre
Avneet Salter
Leonidas Mathis
Ishika Potter
Daanyaal Whitley
Noa Singh
Martha Hyde
Gurpreet Terrell
Malaikah Carpenter
Hallam Whitfield
Chanice Parsons
Esme Parra
Hannah Stephenson
Tiegan Ballard
Carrie-Ann Daugherty
Cory Ferry
Verity Graham
Manisha Pearson
Esme-Rose Proctor
Maxwell Prentice
Brad King
Sultan Mcintosh
Christie Fowler
Inaayah Vega
Mahnoor Wilks
Sadiyah Curran
Elen Glenn
Asma Leal
Arman Mcmillan
Dawud Levine
Mara Mcloughlin
Mandeep Plummer
Alexandre Vargas
Annabelle Cano
Kaine Wolf
Jude Greig
Joseff Nairn`

let ceoExists = false;

let namesArray = names.split('\n');

let salaries = {}

function createIncomeObject(array) {
    for (let i = 0; i < array.length; i++) {
        let rng;
        let val;
        let key = array[i];

        if (i == 0) {
            rng = 0
        } else {
            rng = Math.ceil(Math.random() * 101);
        }


        if (rng > 90) {
            val = Math.floor(Math.random() * 40000 + 80000);
        } else if (rng > 40 && rng <= 90) {
            val = Math.floor(Math.random() * 29999 + 30000);
        } else if (rng > 10 && rng <= 40) {
            val = Math.floor(Math.random() * 10000 + 10000);
        } else if (rng > 0 && rng <= 10) {
            val = 'intern';
        } else if (rng == 0) {
            val = 250000;
        }
        salaries[key] = val;
    }
}

createIncomeObject(namesArray);
// console.log(income);





// let salaries = {}

// function createSalaryList(array){
//     for(let i = 0; i < array.length; i++){
//         //math.floor(Math.random()(Max-Min+1)+Min);
//         let randy = Math.floor(math.random()*(9+1)+1); //Random Number between 1 - 10
//         let key = array[i];
//         let value = "";
        
//         if(randy == 1){
//             value="intern"
//         }else if(randy == 2 || randy == 3 || randy == 4){
//             value = Math.floor(Math.random()*(20000-10000+1)+10000)
//         }else if(randy>= 5 && randy <=9){
//             value = Math.floor(Math.random()*(50000-30000+1)+30000)
//         }else if(randy == 10){
//             value = Math.floor(Math.random()*(120000-80000+1)+80000)
//         }

//         salaries[key] = value;
//     }
//     let randy = value = Math.floor(Math.random()*(49-0+1)+0)
//     let key = array[randy];

//     salaries[key] = 250000
// }

// createSalaryList(namesArray)
// console.log(salaries)

/////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// let interns = 0;
// let ceo = ``

// for(let key in salaries){
//     if(salaries[key] != `inter` && salaries[key] != 250000){
//         salaries[key] = salaries[key] - 5000;
//         employees ++;
//     }
//     if(salaries[key] == 250000){
//         ceo=key
//     }
// }

// salaries[ceo] += 5000*(100 - interns);

let internIncome = 0;
let interns = 0; 

for(let key in salaries){
    if(salaries[key] != `intern` && salaries[key] != 250000){
        salaries[key] = salaries[key]/2
        internIncome =+ Math.round(salaries[key]) 
    }else if(salaries[key]== `intern`){
        intern = key
        interns++
    }
}
for(let key in salaries){
    internIncome = internIncome/interns
    if(salaries[key] == `intern`){
        salaries[key] =+ internIncome
    }
}
console.log(salaries)








let users = {
    name: "jessie",
    sayHi: function(){
        console.log(`Hello ${this.name}`)
    }
}
users.sayHi

let newUser={}

newUser = users;

Object.assign(newUser, users)
newUsers.name = "Jimmy";