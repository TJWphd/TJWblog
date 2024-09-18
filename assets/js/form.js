// handle form submission
// store the blog article
// redirect to the blog page

const formEl = document.querySelector("#blogEntry");
console.log(formEl);

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("button clicked");
  window.location;
  // get all three form entries, make them keys in an object, push that object to local storage
});
