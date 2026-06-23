window.onload = function () {

```
const sessionId =
    "CV-" +
    Math.random().toString(36).substring(2, 8).toUpperCase();

document.getElementById("session").innerText = sessionId;

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

setTimeout(function () {

    document.getElementById("gateway").style.display = "none";
    document.getElementById("portfolio").style.display = "block";

}, 3500);
```

};
