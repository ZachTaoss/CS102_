
let passPortID = 10000;
class UserBasicInfo{
    constructor(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate,bagNumber,Meal,Extra,passPortID){
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
    let Cost = 0;
    let bagCost = 0;
    let extraCost=0;
    for(i=0;i< extra.length; i++){
        if(extra[i].checked === true){
            Extra += extra[i].value + ` `;
            return(extraCost)
        }
    }
    if(firstName != "" && lastName != "" && dateOfBirth != "" && startPlace != "" && endPlace != "" && startDate != "" && endDate != "" && Meal != "" && Extra != "" && bagNumber != ""){
        let user = new UserBasicInfo(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate,bagNumber,Meal,Extra,passPortID);
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        extraCost = extra.length*10
        Cost = bagCost + extraCost
        console.log(Cost)
        alert("Its working")
        console.log(userList)
        passPortID++
        return(passPortID)
    }else if(firstName != "" && lastName != "" && dateOfBirth != "" && startPlace != "" && endPlace != "" && startDate != "" && endDate != "" && Meal != "" && Extra == "" && bagNumber != ""){
        let user = new UserBasicInfo(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate,bagNumber,Meal,Extra,passPortID);
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        Extra += "nothing";
        alert("Its working");
        console.log(userList)
        bagCost = bagNumber*20
        Cost = bagCost + extraCost
        console.log(Cost)
        passPortID++
        return(passPortID)
}else{
        alert("You missed something")
        console.log(Extra)
}}
let boi = new UserBasicInfo("Jimmy", "Pie" , new Date("August 8, 2003"), "Arizona", "Flordia", new Date("August 26, 2020"), new Date("August 29, 2021"),10)
