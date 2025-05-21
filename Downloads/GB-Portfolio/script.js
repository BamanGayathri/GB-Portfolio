function downloadResume() {
  var link = document.createElement("a");
  link.href = "asset/gayathribamanresume.pdf";
  link.download = "gayathribamanresume.pdf";
  link.click();
}

function downloadaws() {
  var link = document.createElement("a");
  link.href = "asset/AWS Architechture.pdf";
  link.download = "AWS Architechture.pdf";
  link.click();
}

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  });
});

// DOM Elements

const mouseTrail = document.querySelector(".mouse-trail");
const scrollProgress = document.querySelector(".scroll-progress");
const loadingBar = document.querySelector(".loading-bar");
const navContainer = document.querySelector(".nav-container");


// Custom Cursor
const cursor = document.querySelector(".custom-cursor");
let cursorVisible = true;
let cursorEnlarged = false;

// Update cursor position with smooth animation
const onMouseMove = (e) => {
  requestAnimationFrame(() => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
};

// Ensure cursor is always visible
document.addEventListener("mousemove", onMouseMove);

// Handle cursor enlargement
const cursorEnlarge = () => {
  if (!cursorEnlarged) {
    cursorEnlarged = true;
  }
};

const cursorReset = () => {
  if (cursorEnlarged) {
    cursorEnlarged = false;
  }
};

// Add hover effect for all clickable elements
const clickableElements = document.querySelectorAll(
  "a, button, .tech-item, .project-link, .nav-links a, .social-link, .scroll-dot, .submit-btn, .hero-cta, .filter-btn, .mobile-menu-btn, .certification-badge"
);

clickableElements.forEach((elem) => {
  elem.addEventListener("mouseover", cursorEnlarge);
  elem.addEventListener("mouseout", cursorReset);
});

// Add text cursor for text input elements
const textElements = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea, [contenteditable]'
);

textElements.forEach((elem) => {
  elem.classList.add("text-select");
});

// Scroll Progress
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  scrollProgress.style.transform = `scaleX(${scrolled / 100})`;

  if (window.scrollY > 50) {
    navContainer.classList.add("scrolled");
  } else {
    navContainer.classList.remove("scrolled");
  }
});


// Contact Form Handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Add loading state to button
  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="ri-loader-4-line"></i> Sending...';
  submitBtn.disabled = true;

  try {
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    alert("Message sent successfully!");
    contactForm.reset();
  } catch (error) {
    // Show error message
    alert("Failed to send message. Please try again.");
  } finally {
    // Reset button state
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  // Hide loading bar after page load
  setTimeout(() => {
    loadingBar.style.display = "none";
  }, 2000);
});
