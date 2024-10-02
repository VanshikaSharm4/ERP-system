let form = document.getElementById("signupForm");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const userType = form[0].value;
    const firstName = form[1].value;
    const lastName = form[2].value;
    const email = form[3].value;
    const password = form[4].value;
    const iAgree = form[5].value;

    let userArray = {
        userType,
        name : {
            first: firstName,
            last: lastName
        },
        email,
        password
    }

    console.log(userArray)
    
    localStorage.setItem('userArray', JSON.stringify(userArray));
})




