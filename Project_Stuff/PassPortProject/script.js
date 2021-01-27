
let passPortID = 10000;
class UserBasicInfo{
    constructor(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate,bagNumber,Meal,Extra,passPortID,Cost,age,Drink,time){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.startPlace = startPlace;
        this.endPlace = endPlace;
        this.startDate = startDate;
        this.endDate = endDate;
        this.bagNumber = bagNumber;
        this.Meal = Meal;
        this.Extras = Extra;
        this.passPortID = passPortID;
        this.cost= Cost;
        this.age= age;
        this.Beer = Drink;
        this.time = time;
    }
}
let userList =[]
function addToList(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("DoB").value;
    let startPlace = document.getElementById("departing").value;
    let endPlace = document.getElementById("arriving").value;
    let startDate = document.getElementById("leaveDate").value;
    let endDate = document.getElementById("returnDate").value;
    let bagNumber = document.getElementById("bags").value;
    let Meal = document.querySelector(`input[name=meal]:checked`).value;
    let extra = document.getElementsByName("extra");
    let Extra = ``;

    let Cost = 300;
    let bagCost = 0;
    let extraCost=0;
    let numberOfExtras = document.getElementsByName("extra").length;
    bagCost = bagNumber*20;
    extraCost = numberOfExtras*10;
    Cost += bagCost + extraCost;

    let Drink = true;
    let Birthday = new Date(dateOfBirth);
    let aBirthday = Birthday.getFullYear();
    let today = new Date().getFullYear();
    let age = today - aBirthday;
    if(age < 21){
        Drink = false;
    };


    let leaveDate = new Date(startDate);
    let backDate = new Date(endDate);
    let leaveDay = leaveDate.getDay()
    let backday = backDate.getDay()
    let time = backday - leaveDay;

    for(i=0;i< extra.length; i++){
        if(extra[i].checked === true){
            Extra += extra[i].value + ` `;
        }
    }
    if(firstName != "" && lastName != "" && dateOfBirth != "" && startPlace != "" && endPlace != "" && startDate != "" && endDate != "" && Meal != "" && Extra != "" && bagNumber != ""){
        let user = new UserBasicInfo(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate,bagNumber,Meal,Extra,passPortID,Cost,age,Drink,time);
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        alert("Its working")
        console.log(userList)
        passPortID++
        return(passPortID)
    }else if(firstName != "" && lastName != "" && dateOfBirth != "" && startPlace != "" && endPlace != "" && startDate != "" && endDate != "" && Meal != "" && Extra == "" && bagNumber != ""){
        let user = new UserBasicInfo(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate,bagNumber,Meal,Extra,passPortID,Cost,age,Drink,time);
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        Extra += "nothing";
        alert("Its working");
        console.log(userList)
        passPortID++
        return(passPortID)
}else{
        alert("You missed something")
        console.log(Extra)
}
}

function print(){
    let space = document.getElementById("names");
    space.innerHTML = " ";
    for(let i = 0; i < userList.length; i++){
        space.innerHTML += `<div><span>${userList[i].passPortID}</span>${userList[i].firstName} ${userList[i].lastName}</div>`
    }
}

console.log("Does the script still work?")
let boi = new UserBasicInfo("Jimmy", "Pie" , new Date("August 8, 2003"), "Arizona", "Flordia", new Date("August 26, 2020"), new Date("August 29, 2021"),10)
