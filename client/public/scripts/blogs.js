const renderBlogs = async () => {
  const response = await fetch("/blogs");
  const data = await response.json();
  const mainContent = document.getElementById("main-content");
  if (data) {
    data.map((blog) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");
      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");
      topContainer.style.backgroundImage = `url(${blog.image})`;
      const name = document.createElement("h3");
      name.textContent = blog.name;
      bottomContainer.appendChild(name);
      const description = document.createElement("p");
      description.textContent = blog.description;
      bottomContainer.appendChild(description);
      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/blogs/${blog.id}`;
      bottomContainer.appendChild(link);
      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Blogs Available 😞";
    mainContent.appendChild(message);
  }
};
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
      "Submitted by: " + blog.submittedBy;
    document.getElementById("submittedOn").textContent =
      "Submitted On: " + blog.submittedOn;
    document.getElementById("content").textContent = blog.content;
    document.title = `Tech Blog - ${blog.name}`;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Blog Available 😞";
    blogContent.appendChild(message);
  }
};
renderBlog();
renderBlogs();
