// listen for click on light/dark mode switch

// re watch JS fundamentals from class recordings: boolean values, if statements, for loops, document.query, document.getElbyID,etc. manipulate JS after the page enters, that's after the fundamentals


let darkMode

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

formEl.addEventListener("", function (event) {
    event.preventDefault();
    console.log("button clicked");
