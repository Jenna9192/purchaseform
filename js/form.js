function copy_info(element) {
    console.log("Clicked the button");
    if (element.checked === true) {
        document.querySelector("#bill-street").value = document.querySelector("#street").value;
        document.querySelector("#bill-city").value = document.querySelector("#city").value;
        document.querySelector("#bill-state").value = document.querySelector("#state").value;
        document.querySelector("#bill-zip").value = document.querySelector("#zip").value;
        document.querySelector("#bill-country").value = document.querySelector("#country").value;
    } else {
        document.querySelector("#bill-street").value = "";
        document.querySelector("#bill-city").value = "";
        document.querySelector("#bill-state").value = "";
        document.querySelector("#bill-zip").value = "";
        document.querySelector("#bill-country").value = "";
    }
}

function checkemail(){
    console.log("Changing email")
    let email1 = document.querySelector("#email");
    let email2 = document.querySelector("#email2");
    
    console.log(email1);
    console.log(email2);

    if (email1 != email2){
        alert("The two emails must match")
        email2.focus()
        return false;
    }
    return true;
}