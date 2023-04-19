//Cat image
fetch("https://api.sen.cat/api/cat").then(response=>response.json()).then(data=>document.getElementById("cat").src=data.url);
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("cat").onload = function() {
        document.getElementById("cat").classList.remove("hidden");
    }
});
//Get weather
fetch('https://wttr.in/?0&m').then(function(response) {
    return response.text();
}).then(function(string) {
    document.getElementById("weather").innerHTML = string;
});
