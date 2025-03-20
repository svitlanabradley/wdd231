

const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbtn.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});
