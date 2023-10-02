function pwToggle() {
    var icon = document.getElementById("pw-eye");
    var p = document.getElementById("pw");
    if(p.type.endsWith("password")){
        p.type = "text";
    } else {
        p.type = "password";
    }
    if (icon.src.endsWith("/asset/images/eye-off.svg")) {
        icon.src = "/asset/images/eye-on.svg";
    } else {
        icon.src = "/asset/images/eye-off.svg";
    }
}

function pwCheckToggle() {
    var icon = document.getElementById("pwCheck-eye");
    var p = document.getElementById("pwCheck");
    if(p.type.endsWith("password")){
        p.type = "text";
    } else {
        p.type = "password";
    }
    if (icon.src.endsWith("/asset/images/eye-off.svg")) {
        icon.src = "/asset/images/eye-on.svg";
    } else {
        icon.src = "/asset/images/eye-off.svg";
    }
}