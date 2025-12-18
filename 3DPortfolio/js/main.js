const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with cart functionality, user authentication, and payment integration.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    liveUrl: "https://yourname-ecommerce.netlify.app",
    codeUrl: "https://github.com/yourusername/ecommerce-platform",
    icon: "🛒",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application using external APIs with beautiful data visualization and forecasting.",
    tags: ["JavaScript", "API", "CSS"],
    liveUrl: "https://weather-dashboardproject.netlify.app/",
    codeUrl: "https://github.com/yourusername/weather-dashboard",
    icon: "🌤️",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task manager with drag-and-drop functionality, real-time updates, and team features.",
    tags: ["React", "Firebase", "CSS"],
    liveUrl: "https://yourname-tasks.netlify.app",
    codeUrl: "https://github.com/yourusername/task-manager",
    icon: "📝",
  },
  {
    title: "Portfolio Generator",
    description:
      "Dynamic portfolio builder that generates customizable websites from user input and templates.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://yourname-portfolio-gen.netlify.app",
    codeUrl: "https://github.com/yourusername/portfolio-generator",
    icon: "🎨",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for tracking social media metrics across multiple platforms with charts.",
    tags: ["JavaScript", "Chart.js", "MySQL"],
    liveUrl: "https://yourname-social-dashboard.netlify.app",
    codeUrl: "https://github.com/yourusername/social-dashboard",
    icon: "📊",
  },
  {
    title: "Blog Platform",
    description:
      "Full-featured blogging platform with markdown support, comments, and user authentication.",
    tags: ["Java", "MySQL", "HTML", "CSS"],
    liveUrl: "https://yourname-blog.netlify.app",
    codeUrl: "https://github.com/yourusername/blog-platform",
    icon: "📰",
  },
];

let scene, camera, renderer, particles;

function initThreeJS() {
  const canvas = document.getElementById("three-canvas");
  if (!canvas) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setClearColor(0x000000, 0);

  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00d4ff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100);
  const torusMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff88,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  scene.add(torus);

  const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xff006e,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(2, 1, -1);
  scene.add(sphere);

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const boxMaterial = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.position.set(-2, -1, -1);
  scene.add(box);

  function animate() {
    requestAnimationFrame(animate);

    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.0005;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;

    box.rotation.x += 0.008;
    box.rotation.y += 0.008;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    if (canvas.clientWidth && canvas.clientHeight) {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
  });

  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = (-(event.clientY - rect.top) / rect.height) * 2 + 1;

    particles.rotation.x = y * 0.3;
    particles.rotation.y = x * 0.3;
  });
}

function renderProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card">
            <div class="project-image">
                <span>${project.icon}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags
                      .map((tag) => `<span class="project-tag">${tag}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${
                      project.liveUrl
                    }" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        View Live
                    </a>
                    <a href="${
                      project.codeUrl
                    }" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                        View Code
                    </a>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

function animateSkills() {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target.querySelector(".skill-progress");
          const percentage = progress.getAttribute("data-progress");

          setTimeout(() => {
            progress.style.width = percentage + "%";
          }, 200);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  skillCards.forEach((card) => observer.observe(card));
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name.value.trim().length < 2) {
      nameError.textContent = "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters";
      isValid = false;
    }

    if (isValid) {
      alert("Thank you for your message! I will get back to you soon.");
      form.reset();
    }
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("theme-toggle");
  const icon = themeToggle.querySelector("i");

  if (theme === "dark") {
    icon.className = "fas fa-moon";
  } else {
    icon.className = "fas fa-sun";
  }
}

function initScrollTop() {
  const scrollTopBtn = document.getElementById("scroll-top");

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initThreeJS();
  renderProjects();
  initNavbar();
  animateSkills();
  initContactForm();
  initThemeToggle();
  initScrollTop();
  initSmoothScroll();
});
