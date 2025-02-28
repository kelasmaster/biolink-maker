document.addEventListener("DOMContentLoaded", () => {
  const biolinkForm = document.getElementById("biolink-form");
  const linkList = document.getElementById("link-list");
  const previewTitle = document.getElementById("preview-title");
  const previewDescription = document.getElementById("preview-description");
  const previewLogo = document.getElementById("preview-logo");
  const generateCodeBtn = document.getElementById("generate-code-btn");
  const sourceCodeModal = document.getElementById("source-code-modal");
  const closeModalBtn = document.querySelector(".close");
  const copyCodeBtn = document.getElementById("copy-code-btn");
  const sourceCodeTextarea = document.getElementById("source-code");

  // Handle form submission
  biolinkForm.addEventListener("submit", (e) => {
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

      // Clear the form
      biolinkForm.reset();
    } else {
      alert("Please fill in both fields.");
    }
  });

  // Update preview title and description
  document.getElementById("page-title").addEventListener("input", (e) => {
    previewTitle.textContent = e.target.value || "Your Biolink Page";
  });

  document.getElementById("page-description").addEventListener("input", (e) => {
    previewDescription.textContent = e.target.value;
  });

  // Update preview logo
  document.getElementById("logo-url").addEventListener("input", (e) => {
    const logoUrl = e.target.value.trim();
    if (logoUrl) {
      previewLogo.src = logoUrl;
      previewLogo.style.display = "block";
    } else {
      previewLogo.style.display = "none";
    }
  });

  // Generate source code
  generateCodeBtn.addEventListener("click", () => {
    const pageTitle = document.getElementById("page-title").value.trim() || "Your Biolink Page";
    const pageDescription = document.getElementById("page-description").value.trim();
    const logoUrl = document.getElementById("logo-url").value.trim();

    let linksHtml = "";
    Array.from(linkList.children).forEach((link) => {
      linksHtml += `<a href="${link.href}" target="_blank" style="display: block; margin: 10px 0; padding: 10px; background: #007bff; color: #fff; text-decoration: none; border-radius: 4px;">${link.textContent}</a>`;
    });

    const sourceCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f0f8ff;
      padding: 20px;
    }
    img {
      max-width: 100px;
      margin-bottom: 15px;
    }
    a {
      display: block;
      margin: 10px 0;
      padding: 10px;
      background: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
    }
    a:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  ${logoUrl ? `<img src="${logoUrl}" alt="Logo">` : ""}
  <h1>${pageTitle}</h1>
  <p>${pageDescription}</p>
  ${linksHtml}
</body>
</html>
    `;

    sourceCodeTextarea.value = sourceCode.trim();
    sourceCodeModal.style.display = "block";
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    sourceCodeModal.style.display = "none";
  });

  // Copy source code
  copyCodeBtn.addEventListener("click", () => {
    sourceCodeTextarea.select();
    document.execCommand("copy");
    alert("Source code copied to clipboard!");
  });
});
