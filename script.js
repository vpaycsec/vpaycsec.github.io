function enterSite() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please enter Name and Email");
        return;
    }

    document.getElementById("gateway").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
}
