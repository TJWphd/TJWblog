// handles form submission
const formEl = document.querySelector("#blogEntry");
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = document.getElementById("userName").value;
  const postTitle = document.getElementById("postTitle").value;
  const content = document.getElementById("content").value;
  // blog entry has 3 keys
  const blogEntry = {
    userName: userName,
    postTitle: postTitle,
    content: content,
  };
  // parses strings, sets array blank instead of error if no data
  let blogEntries = JSON.parse(localStorage.getItem("blogEntries"));
  if (!blogEntries) {
    blogEntries = [];
  }
  // pushes entries into array if data present
  blogEntries.push(blogEntry);
  localStorage.setItem("blogEntries", JSON.stringify(blogEntries));
  window.location.href = "./blog.html";
});
