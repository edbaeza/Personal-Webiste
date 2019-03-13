var currentTheme = localStorage.getItem("theme");
console.log("currentTheme = "+ currentTheme);

function init(){
    console.log("In init");
    var body = document.getElementById("body");
    var button = document.getElementById("toggletheme");
    if(currentTheme == "light_theme"){
        body.className = "light_theme";
        button.innerHTML = "Dark Mode";
    }
    else{
        body.className = "dark_theme";
        button.innerHTML = "Light Mode";
    }
}

function init2(){
    if(currentTheme == "light_theme"){
        document.getElementById("linkedinlogo").src = "images/In-Black-34px-R.png";
        document.getElementById("githublogo").src = "images/GitHub-Mark-32px.png";
    }
    else{
        document.getElementById("linkedinlogo").src = "images/In-White-34px-R.png";
        document.getElementById("githublogo").src = "images/GitHub-Mark-Light-32px.png";
    }
}

function changeTheme(){
    var body = document.getElementById("body");
    var button = document.getElementById("toggletheme");
    if(body.className == "light_theme"){
        body.className = "dark_theme";
        localStorage.setItem("theme", "dark_theme");
        button.innerHTML = "Light Mode";
        document.getElementById("githublogo").src = "images/GitHub-Mark-Light-32px.png";
        document.getElementById("linkedinlogo").src = "images/In-White-34px-R.png";
    }
    else{
        body.className = "light_theme";
        localStorage.setItem("theme", "light_theme");
        button.innerHTML = "Dark Mode";
        document.getElementById("githublogo").src = "images/GitHub-Mark-32px.png";
        document.getElementById("linkedinlogo").src = "images/In-Black-34px-R.png";
    }

}
