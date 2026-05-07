const kb = window.PORTFOLIO_KB;

const els = {
  experienceList: document.querySelector("#experienceList"),
  projectList: document.querySelector("#projectList"),
  skillsList: document.querySelector("#skillsList"),
  certificationList: document.querySelector("#certificationList")
};

function init() {
  renderExperience();
  renderProjects();
  renderSkills();
  renderCertifications();
  exposeAgentHelpers();
  bindFoyerPreviewMotion();
}

function renderExperience() {
  els.experienceList.innerHTML = kb.experience
    .map(
      (job) => `
        <article id="${job.id}" class="job-card" data-agent-section="${job.id}">
          <div class="job-meta">
            <span class="job-period">${job.period}</span>
            <div>
              <h3>${job.title}</h3>
              <p>${job.company}<br />${job.location}</p>
            </div>
          </div>
          <div class="job-body">
            <p>${job.summary}</p>
            <ul class="bullet-list">
              ${job.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="pill-row">
              ${job.stack.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  els.projectList.innerHTML = kb.projects
    .map(
      (project) => `
        <article id="${project.id}" class="project-card" data-agent-section="${project.id}">
          <span class="project-label">${project.label}</span>
          <h3>${project.name}</h3>
          <p>${project.summary}</p>
          <p>${project.details}</p>
          <div class="pill-row">
            ${project.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  els.skillsList.innerHTML = kb.skills
    .map(
      (skill) => `
        <article class="skill-card">
          <h3>${skill.group}</h3>
          <ul>
            ${skill.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderCertifications() {
  els.certificationList.innerHTML = kb.certifications.map((item) => `<li>${item}</li>`).join("");
}

function exposeAgentHelpers() {
  window.sairamPortfolio = {
    scrollToSection,
    highlightSection,
    openContact: () => scrollToSection("contact")
  };
}

function bindFoyerPreviewMotion() {
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const clickable = target.closest("button, [role='button'], a");
      const label = [
        clickable?.textContent,
        clickable?.getAttribute("aria-label"),
        clickable?.getAttribute("title")
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (!label.includes("talk") && !label.includes("voice") && !label.includes("chat")) {
        return;
      }

      document.body.classList.add("agent-preview-active");
      window.setTimeout(() => document.body.classList.remove("agent-preview-active"), 4500);
    },
    true
  );
}

function scrollToSection(targetId) {
  const target = document.getElementById(targetId) || document.querySelector(`[data-agent-section="${targetId}"]`);
  if (!target) return false;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  highlightSection(targetId);
  return true;
}

function highlightSection(targetId) {
  const target = document.getElementById(targetId) || document.querySelector(`[data-agent-section="${targetId}"]`);
  if (!target) return false;
  target.classList.remove("section-highlight");
  window.setTimeout(() => target.classList.add("section-highlight"), 80);
  return true;
}

init();
