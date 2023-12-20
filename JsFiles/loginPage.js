let usernameEl = document.getElementById("username");
let passwordEl = document.getElementById("password");
let formEl = document.getElementById("myForm");

formEl.addEventListener("submit", function(event){
    event.preventDefault();
    
});

function login(){
    let username = usernameEl.value;
    let password = passwordEl.value;
    console.log(username);
    console.log(password);
    if(username === 'Admin' && password === 'Admin@123'){
        alert("Successfully logged in..!!");
        window.location = "../HtmlFiles/homePage.html";
    }else{
        alert("Invalid Username or Password");
    }
}
