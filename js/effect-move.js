document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".mar").forEach(function(move){
        var moving_value = move.getAttribute("data-value");

        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

document.addEventListener("mousemove", parallaxII);
function parallaxII(e){
    document.querySelectorAll(".barco").forEach(function(move){
        var moving_value = move.getAttribute("data-value");

        var x = (e.clientX * moving_value) / -250;
        var y = (e.clientY * moving_value) / -250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

document.addEventListener("mousemove", parallaxIII);
function parallaxIII(e){
    document.querySelectorAll(".mar2").forEach(function(move){
        var moving_value = move.getAttribute("data-value");

        var x = (e.clientX * moving_value) / 750;
        var y = (e.clientY * moving_value) / 750;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}