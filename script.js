window.onload = function () {

    const browser = navigator.userAgent;
    const platform = navigator.platform;
    const language = navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const screenSize = screen.width + " x " + screen.height;

    document.getElementById("browser").innerText =
        browser.includes("Chrome") ? "Chrome" :
        browser.includes("Firefox") ? "Firefox" :
        browser.includes("Safari") ? "Safari" :
        "Unknown";

    document.getElementById("platform").innerText = platform;
    document.getElementById("language").innerText = language;
    document.getElementById("timezone").innerText = timezone;
    document.getElementById("screen").innerText = screenSize;
};

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
