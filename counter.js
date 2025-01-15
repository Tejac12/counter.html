let countValue = document.getElementById("count")
let inc = document.getElementById("in")
let dec = document.getElementById("de")
let reset = document.getElementById("reset")
let count = 0
inc.addEventListener("click", function () {
    count++
    display()
    inc.style.backgroundColor = "green"
    inc.style.borderRadius = "10px"
    inc.style.fontSize = "18px"
})
dec.addEventListener("click", function () {
    count--
    display()
    dec.style.backgroundColor = "yellow"
    dec.style.borderRadius = "10px"
    dec.style.fontSize = "18px"
})
reset.addEventListener("click", function () {
    count = 0
    display()
    reset.style.backgroundColor = "red"
    reset.style.borderRadius = "10px"
    reset.style.fontSize = "18px"
})
function display() {
    countValue.textContent = count;
}