let userArray=[];
 

// let tempUser = {
//     name : {
//         first : "Aayush",
//         second : "sharma"
//     },
//     email : "aayushsharma2647b@gmail.com",
//     password : "abcdefgh",
//     userType: "Student"
// }
// let tempUser2 = {
//     name : {
//         first : "Vanshika",
//         second : "sharma"
//     },
//     email : "vanshikasharma@gmail.com",
//     password : "abcdefgh",
//     userType: "Student"
// }
// userArray.push(tempUser);
// userArray.push(tempUser2);
// userArray = JSON.stringify(userArray);
// localStorage.setItem("userArray",userArray);




userArray = localStorage.getItem("userArray");
 userArray = JSON.parse(userArray);
 if(!userArray) userArray=[];
let form = document.querySelector("form");
function login(){
    form[0].value.trim();
    form[1].value.trim();
    if(!form[0].value){
         form[0].focus()
    }
    else if(!form[1].value){
        form[1].focus()
    }
    else{
   let userObj ={
    email :form[0].value,
    password : form[1].value
   }
  let objFound = searchInUserArray(userObj);
  if(objFound) { 
     if(objFound.password == userObj.password){
        if(objFound.userType=="Student"){
            // student home
            window.location.href= "home.html";
        }
        else if(objFound.userType=="Teacher"){
            // teacher home
        }
        else{
            // admin home
        }
     }
     else{
       showWrongPass();
        
     }

   }
    else {
        showWrongId();
        
    }
}
}

function searchInUserArray(userObj){
    console.log(userArray);
    let objFound = userArray.find(function(value){
          return value.email == userObj.email;
    })
    return objFound;
}

function hideWrongPass(){
    let wrongPassDiv = document.getElementById("wrongPassDiv");
   if(wrongPassDiv) wrongPassDiv.remove();
}
function hideWrongId(){
    let wrongIdDiv = document.getElementById("wrongIdDiv");
  if(wrongIdDiv)  wrongIdDiv.remove();
}


function showWrongPass(){
   hideWrongId();
    let wrongPassDiv = document.createElement("div");
    wrongPassDiv.id = "wrongPassDiv";
    wrongPassDiv.innerText = "Password is invalid";
    let loginDiv = document.getElementById("loginDiv");
    console.log(loginDiv);
    loginDiv.prepend(wrongPassDiv);
    setTimeout(hideWrongPass,3000);
}
function showWrongId(){
    hideWrongPass();
    let wrongIdDiv = document.createElement("div");
    wrongIdDiv.id = "wrongIdDiv";
    wrongIdDiv.innerText = "Email is invalid";
    let loginDiv = document.getElementById("loginDiv");
    console.log(loginDiv);
    loginDiv.prepend(wrongIdDiv);
    setTimeout(hideWrongId,3000);
}
form[0].addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        event.preventDefault();
        form[1].focus();
    }
    
})
form[1].addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        event.preventDefault();
        login();
    }
    
})
form[2].addEventListener("click",function(){
    console.log("hii");
   login();
})
form[3].addEventListener("click",function(){
    window.location.href= "signUp.html";
})