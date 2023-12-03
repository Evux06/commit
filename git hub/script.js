function validateForm() {
    var email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Inserisci un indirizzo email valido!");
        return false;
    }

    return true;
}
