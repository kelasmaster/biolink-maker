document.addEventListener("DOMContentLoaded", () => {
  const biolinkForm = document.getElementById("biolink-form");
  const previewTitle = document.getElementById("preview-title");
  const previewDescription = document.getElementById("preview-description");
  const previewLogo = document.getElementById("preview-logo");
  const themeColor = document.getElementById("theme-color");

  // Predefined social media links
  const socialLinks = {
    whatsapp: "https://wa.me/",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/"
  };

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

  // Handle form submission
  biolinkForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user inputs
    const pageTitle = document.getElementById("page-title").value.trim() || "Your Biolink Page";
    const pageDescription = document.getElementById("page-description").value.trim();
    const logoUrl = document.getElementById("logo-url").value.trim();
    const selectedColor = themeColor.value;

    // Update preview styles
    document.querySelector(".biolink-preview").style.backgroundColor = selectedColor;

    // Update social media links dynamically
    for (const [platform, url] of Object.entries(socialLinks)) {
      const linkElement = document.querySelector(`.link-item.${platform}`);
      linkElement.href = `${url}${pageTitle.toLowerCase().replace(/\s+/g, "")}`;
    }

    alert("Biolink generated successfully!");
  });
});
