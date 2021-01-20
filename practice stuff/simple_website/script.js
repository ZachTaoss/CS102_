
"use strict";



function submit() {
    let user = {}
    user["Email"] = document.getElementById("Email").value;
    user["ID"] = +(document.getElementById("ID").value);
    user["UserName"] = document.getElementById("User-Name").value;
    user["Password"] = document.getElementById("User-Password").value;

    console.log(user);
    console.log(`User Email: ${user["Name"]}\n
User ID: ${user["ID"]}\n
User Name: ${user["Username"]}\n
User Password: ${user["Password"]}`);
}

let name = document.getElementById("name").value

function createKnight(name,color,quest,swallow){
    return{
        name,
        color,
        quest,
        swallow
    }
}

//Kyle Peck's Example

function run() {
    let name = document.getElementById("name").value
    let color = document.getElementById("Color").value
    let quest = document.getElementById("quest").value
    let swallow = document.getElementById("swallow").value

    sirlancelot=createKnight(name, color, quest, swallow)

    console.log(sirlancelot)
}