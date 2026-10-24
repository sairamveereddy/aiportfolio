// Global Interactive Utilities for sairamveereddy.com
// Handles copy-to-clipboard, citation formats, search/filter, and code copy buttons.

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast-notice";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(
      () => showToast(successMessage || "Copied to clipboard!"),
      () => fallbackCopy(text, successMessage)
    );
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage || "Copied to clipboard!");
  } catch (err) {
    showToast("Failed to copy text");
  }
  document.body.removeChild(textArea);
}

// Mobile Nav Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".site-header nav");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navMenu.classList.toggle("nav-open");
    });
  }

  // Setup Code Block Copy Buttons
  document.querySelectorAll(".code-container").forEach((container) => {
    const copyBtn = container.querySelector(".code-copy-btn");
    const pre = container.querySelector("pre");
    if (copyBtn && pre) {
      copyBtn.addEventListener("click", () => {
        copyToClipboard(pre.innerText, "Code copied to clipboard!");
      });
    }
  });

  // Setup Citation Tab Switchers
  document.querySelectorAll(".citation-box").forEach((box) => {
    const tabs = box.querySelectorAll(".citation-tab");
    const pre = box.querySelector(".citation-pre");
    const copyBtn = box.querySelector(".copy-citation-btn");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const format = tab.getAttribute("data-format");
        const citationText = tab.getAttribute("data-citation");
        if (citationText && pre) {
          pre.textContent = citationText;
        }
      });
    });

    if (copyBtn && pre) {
      copyBtn.addEventListener("click", () => {
        copyToClipboard(pre.textContent, "Citation copied to clipboard!");
      });
    }
  });
});
