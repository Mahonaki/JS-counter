// create a counter that you can increase, decrease, and reset the value. When the value is above 0 let it be green and if its below 0 let it be red.

// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
        count--;
        } else if (styles.contains("increase")) {
        count++;
        } else {
        count = 0;
        }

        if (count > 0) {
        value.style.color = "green";
        }
        if (count < 0) {
        value.style.color = "red";
        }
        if (count === 0) {
        value.style.color = "#222";
        }
        value.textContent = count;
    });
});