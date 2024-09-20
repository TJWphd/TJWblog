// retrieve blog article from local storage
let blogArray = JSON.parse(localStorage.getItem("blogEntries"));
console.log(blogArray);

// display blog articles
//todo: loop through the blog array, each post needs to be put on the page

const buttonEl = document.querySelector("#back");

buttonEl.addEventListener("click", function () {
  window.location.href = "./index.html";
});
