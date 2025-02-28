document.addEventListener("DOMContentLoaded", () => {
  const linkForm = document.getElementById("link-form");
  const linkList = document.getElementById("link-list");

  // Handle form submission
  linkForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const title = document.getElementById("link-title").value.trim();
    const url = document.getElementById("link-url").value.trim();

    if (title && url) {
      // Create a new link item
      const linkItem = document.createElement("a");
      linkItem.href = url;
      linkItem.textContent = title;
      linkItem.target = "_blank";
      linkItem.classList.add("link-item");

      // Append to the preview section
      linkList.appendChild(linkItem);

      // Clear the form fields
      document.getElementById("link-title").value = "";
      document.getElementById("link-url").value = "";
    } else {
      alert("Please fill in both fields.");
    }
  });
});
