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

// const themeSwitcher = document.querySelector("#toggle");
// const container = document.querySelector(".container");
// let mode = "dark";
// themeSwitcher.addEventListener("click", function () {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//     document.documentElement.style.setProperty("circle-color");
//   } else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//     document.documentElement.style.setProperty("circle-color");
//   }
// });

// const darkModeButton = document.getElementById("darkMode");
// darkModeButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("button clicked");
//todo: target the page
// todo: add or remove the class
// });

//code below copied from dev.to*********
// target the button using the data attribute we added earlier
// const button = document.querySelector("[data-theme-toggle]");

// button.addEventListener("click", () => {
//   const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

//   // update the button text
//   const newCta =
//     newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
//   button.innerText = newCta;

//   // use an aria-label if you are omitting text on the button
//   // and using sun/moon icons, for example
//   button.setAttribute("aria-label", newCta);

//   // update theme attribute on HTML to switch theme in CSS
//   document.querySelector("html").setAttribute("data-theme", newTheme);

//   // update in local storage
//   localStorage.setItem("theme", newTheme);

//   // update the currentThemeSetting in memory
//   currentThemeSetting = newTheme;
// });
// // *************
