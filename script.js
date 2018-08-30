var body = document.querySelector("#bg");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
console.log(body);
console.log(color2);
console.log(color1);
console.log(css);

function changeColor()
{
       body.style.background="linear-gradient(to right"
        +"," 
        +color1.value 
        + ","
        + color2.value 
        + ")"; 
    
    css.textContent=body.style.background;
}
color1.addEventListener("input",changeColor);
color2.addEventListener("input",changeColor);