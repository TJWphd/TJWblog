// handle form submission

const formEl = document.querySelector("#blogEntry");
console.log(formEl);

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("button clicked");

  const userName = document.getElementById("userName").value;
  console.log(userName);
  const postTitle = document.getElementById("postTitle").value;
  console.log(postTitle);
  const content = document.getElementById("content").value;
  console.log(content);

  const blogEntry = {
    userName: userName,
    postTitle: postTitle,
    content: content,
  };
  console.log(blogEntry + "new entry");

  localStorage.setItem("userName", userName);
  localStorage.setItem("postTitle", postTitle);
  localStorage.setItem("content", content);
  console.log(userName);

  // displayStoredData();

  // storeLocalStorage(blogEntry);
});

// const displayStoredData = (storedData) => {

// };

// formEl.addEventListener("submit", blogEntry);
// console.log(blogEntry);

// store the blog article
// redirect to the blog page

// todo: WHEN I enter try to submit a form without a username, title, or content,
// THEN I am presented with a message that prompts me to complete the form.

//   // todo: get all three form entries, make them keys in an object, push that object to local storage
// let blogArray = JSON.parse(localStorage.getItem("blogEntry"));
// if (!blogArray) {
//   blogArray = [];
// }
// console.log(blogArray);
// blogArray.push(blogEntry);
// localStorage.setItem("blogEntries", JSON.stringify(blogArray));
// window.location.href = "./blog.html";
