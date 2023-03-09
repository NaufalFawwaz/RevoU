function validate() {
    const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
    const interest = document.getElementById("interest").value;

    // Validasi nama
    if(name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Validasi email
    if (email == "") {
		alert("Email must be filled out");
		return false;
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		alert("Invalid email format");
		return false;
	}

    // Validasi interest
    if (interest == "a") {
        alert("Must select one interest option")
        return false;
    }

    return true;
}