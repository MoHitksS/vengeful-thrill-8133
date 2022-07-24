
let checkLogin = () => {
    let user = JSON.parse(localStorage.getItem("users")) || [];
    let temp = JSON.parse(localStorage.getItem("temp")) || [];
    let flag = JSON.parse(localStorage.getItem("flag")) || false;
    let cartdata = JSON.parse(localStorage.getItem("cartData")) || [];
    let length = cartdata.length-1;
    if (flag === true) {
        document.getElementById("hi_signin").innerText = `Hi! ${temp[0].firstname}`
        document.getElementById("status").innerText = `Hello! ${temp[0].name}`
        document.querySelector(".remove>a").href= ""
        let loginbtn = document.getElementById("login_btn_join")
        loginbtn.innerText = `Check Programs`;
        loginbtn.onclick = () =>{
            event.preventDefault()
            window.location.href = "../page/workout-plans.html"
        }

        let signout = document.getElementById("login_btn_sign")
        signout.innerText = `Sign Out`;
        signout.onclick = () =>{
            event.preventDefault()
            flag = false;
            localStorage.setItem("flag",JSON.stringify(flag));
            localStorage.setItem("temp",JSON.stringify(temp));
            window.location.reload();
        }
        
    }else{
        console.log(temp);

    }
    if(cartdata.length === 0){
        document.querySelector("#bag_item").innerText = ""
    }else{
        document.querySelector("#bag_item").innerText = length + 1
    }
    document.getElementById("nav_bag").onclick = () =>{
        window.location.href = "../page/cart.html"
    }
}


export {checkLogin};
