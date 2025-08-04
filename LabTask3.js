function CheckFormValidation() {
    let x = document.getElementById("firstname").value;
    if (x == "") {
        alert("Please fill up the name field");
        return false
    }
}