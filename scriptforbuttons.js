const onOffBtn = document.getElementById("changeTextBtn");
const revertBgBtn = document.getElementById("revert");
const toggleBtn = document.getElementById("toggleBtn");
const visMessage = document.getElementById("message");
const body = document.body
const bgColorBtn = document.getElementById("colorBtn");
let onOfftoggle = true;
let visToggle = true;
onOffBtn.addEventListener("click", function() {
    onOffBtn.innerHTML = onOfftoggle ? "on" : "off";
    onOffBtn.style.backgroundColor = onOfftoggle ? "green" : "red"
    onOfftoggle = !onOfftoggle;
});
toggleBtn.addEventListener("click", function() {
    visMessage.style.visibility = visToggle ? "visible" : "hidden";
    visToggle = !visToggle; 
});
bgColorBtn.addEventListener("click", function() {
    body.style.backgroundColor = randomColor();
});

revertBgBtn.addEventListener("click", function() {
    body.style.backgroundColor = "#aef5fc"
});
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${b}, ${g})`
};