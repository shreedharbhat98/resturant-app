
let userDetails = []

userDetails = JSON.parse(localStorage.getItem("detailsArray"))
if (userDetails == null)
    userDetails = []

//Function For Registration Start

var signup = document.getElementById("register")
signup.addEventListener("click", userRegistartion)

let registrationAlert = document.getElementById("signupAlert")
function userRegistartion() {
    let name = document.getElementById("regName").value
    let email = document.getElementById("regEmail").value
    let password = document.getElementById("regPassword").value

    if (name == "" || email == "" || password == "") {
        registrationAlertMsg("Invalid Input")
        return
    }
    else {
        for (let i = 0; i < userDetails.length; i++) {
            if (userDetails[i].email === email) {
                registrationAlertMsg("Email Already Exists !!")
                return
            }
        }
        let person = {
            name: name,
            email: email,
            password: password
        }

        userDetails.push(person)
        localStorage.setItem("detailsArray", JSON.stringify(userDetails))

        registrationAlert.setAttribute("class", "alert alert-success mt-2 font-weight-bold pt-1 pb-1")
        registrationAlert.setAttribute("role", "alert")
        registrationAlert.textContent = "Registration Successful"

        setTimeout(() => { $("#signup").modal('hide') }, 2000)

    }
}

function registrationAlertMsg(message) {
    registrationAlert.setAttribute("class", "alert alert-danger mt-2 font-weight-bold pt-1 pb-1")
    registrationAlert.setAttribute("role", "alert")
    registrationAlert.textContent = message

}
//Function For Registration End


//Function For Login Start

let signin = document.getElementById("signin")
signin.addEventListener("click", userLogin)

var alert = document.getElementById("signinAlert")
function userLogin() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(email, password)
    if (userDetails == null) {
        loginAlertMsg("Please Register First")
        return;
    }

    for (let i = 0; i < userDetails.length; i++) {
        if (email !== userDetails[i].email && password !== userDetails[i].password) {
            loginAlertMsg("Invalid Email or Password")
        }
    }

    window.addEventListener("keyup", function () {
        $("#signinAlert").hide()
    })
    // setTimeout(() => { $("#login").modal('hide') }, 2000)

}
function loginAlertMsg(message) {
    alert.setAttribute("class", "alert alert-danger mt-2 font-weight-bold pt-1 pb-1")
    alert.setAttribute("role", "alert")
    alert.textContent = message

}