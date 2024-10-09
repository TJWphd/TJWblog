// naming variable assigns space in local storage for it
let darkMode = localStorage.getItem("darkMode");
// sets up dark mode as a toggle-able feature
const darkModeToggle = document.querySelector("#dark-mode-toggle");
// establishes how to enable dark mode and save to local storage
const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
};
// establishes how to disable dark mode
const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", "disabled");
};
// stores dark mode in local storage for next time the user visits!
if (darkMode === "enabled") {
  enableDarkMode();
}
//listens to click on dark mode toggle-button, updates let-variable
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});
