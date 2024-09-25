// listen for click on light/dark mode switch

// re watch JS fundamentals from class recordings: boolean values, if statements, for loops, document.query, document.getElbyID,etc. manipulate JS after the page enters, that's after the fundamentals
const darkModeButton = document.getElementById("darkMode");

darkModeButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("button clicked");
  //todo: target the page
  // todo: add or remove the class
});
