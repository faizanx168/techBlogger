const renderBlog = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());
  const response = await fetch("/blogs");
  const data = await response.json();
  const blogContent = document.getElementById("blog-content");
  let blog;
  blog = data.find((blog) => blog.id === requestedID);
  if (blog) {
    document.getElementById("image").src = blog.image;
    document.getElementById("name").textContent = blog.name;
    document.getElementById("submittedBy").textContent =
      "Submitted by: " + blog.submittedby;
    document.getElementById("submittedOn").textContent =
      "Submitted On: " + blog.submittedon;
    document.getElementById("content").textContent = blog.content;
    document.title = `Tech Blog - ${blog.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Blog Available 😞";
    blogContent.appendChild(message);
  }
};
renderBlog();
