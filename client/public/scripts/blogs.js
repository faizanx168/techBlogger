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

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderBlogs();
}
