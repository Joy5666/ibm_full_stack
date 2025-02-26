let form = document.getElementById("userform");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;   
    let phonenumber = document.getElementById("phone number").value;
    let obj = {
        name , email, password, phonenumber
        if obj.password===confirm_password{
            return alert("password does not match");
    }

    console.log(name.value,email.value,password.value,phonenumber.value);
    console.log(obj);
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;
    let td2 = document.createElement("td");
    td2.innerHTML = email;  
    let td3 = document.createElement("td");
    td3.innerHTML = password;
    let td4 = document.createElement("td");
    td4.innerHTML = phonenumber;
    tr.appendChild(td1,td2,td3,td4);
    document.getElementById("tbody").appendChild(tr);
});
