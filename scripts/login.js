let user = JSON.parse(localStorage.getItem("users")) || [];
let flag = JSON.parse(localStorage.getItem("flag")) || false;

window.onload = loginLoad()


function loginLoad(){
    document.getElementById("login").onclick = () => {
        login();
    }
}

let login = () => {
    event.preventDefault();
    let username = document.getElementById("loginusername").value;
    let password = document.getElementById("loginpassword").value;

    if (username !== "" && password !== "") {
        let l1 = new LoginUser();
        l1.CheckUser(username, password)
    } else {
        alert("Fill All The Details")
    }

}


class LoginUser {
    constructor() {
    }

    CheckUser(username, password) {
        let isValidate = false;
        let isValidateusername = this.userusername(username)
        let isvalidatePassword = this.userPassword(password);
        isValidate = this.userusernamePassword(username, password)
        if (!isValidateusername) {
            alert("Please Enter Correct Username")
        } else if (!isvalidatePassword) {
            alert("Wrong credentials")
        } else if (isValidate) {
            alert("Login successful!")
            window.location.href = "index.html";
        }
    }

    userusername(username) {
        let check = false
        user.forEach(element => {
            console.log(element);
            if (username === element.username) {
                check = true;
            }
        });
        return check;
    }

    userPassword(password) {
        let check = false
        user.forEach(element => {
            if (password == element.password) {
                check = true;
            }
        });
        return check;
    }


    userusernamePassword(username, password) {
        let check = false
        let data = user.filter(element => {
            if (username === element.username && password === element.password) {
                check = true;
                flag = true
                return element;
            }
        });
        localStorage.setItem("temp", JSON.stringify(data));
        localStorage.setItem("flag", JSON.stringify(flag));
        return check;
    }
}