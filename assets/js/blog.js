// retrieves blog entries from local storage
let blogEntries = JSON.parse(localStorage.getItem("blogEntries"));
console.log(blogEntries);
// displays blog entries in order of title, content, author
const blogDisplay = document.getElementById("blogPosts");
blogDisplay.innerHTML = "";
for (let i = 0; i < blogEntries.length; i++) {
  const blog = document.createElement("div");
  const titleEl = document.createElement("h3");
  titleEl.textContent = blogEntries[i].postTitle;
  const contentEl = document.createElement("p");
  contentEl.textContent = blogEntries[i].content;
  const authorEl = document.createElement("p");
  authorEl.textContent = blogEntries[i].userName;
  blog.appendChild(titleEl);
  blog.appendChild(contentEl);
  blog.appendChild(authorEl);
  blogDisplay.appendChild(blog);
}
// back button returns user to form page
const buttonEl = document.querySelector("#back");
buttonEl.addEventListener("click", function () {
  window.location.href = "./index.html";
});
