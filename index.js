/* ==========================================================================
   NovaFolio - Core Interactive Engine
   Author: Harol Maxilan
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initProjectLoader();
  initTerminal();
  initSandbox();
  initScrollObservers();
  initContactForm();
  initNavbarScroll();
});

/* ==========================================================================
   Global Helper Data
   ========================================================================== */
const PROJECTS_DATA = [
  {
    title: "Friday — No-Code ML Pipeline",
    category: "aiml",
    description: "Full-stack application designed to automate dataset profiling, preprocessing, model training (Scikit-Learn), and visual assessment utilizing a Gemini 3.5 AI tutor interface.",
    tech: ["FastAPI", "Python", "Scikit-Learn", "Gemini SDK", "JavaScript"],
    github: "https://github.com/Max-i26/Friday",
    live: "#",
    icon: "fa-robot"
  },
  {
    title: "NEXLAB — Smart Booking Platform",
    category: "web",
    description: "SAB University booking utility running automated request scoring, round-robin time division, waitlist auto-promotion, and rolling demand prediction engines.",
    tech: ["PHP", "MySQL", "JavaScript", "PHPMailer", "Tailwind CSS"],
    github: "https://github.com/sankajithdjinasena/NEXLAB",
    live: "#",
    icon: "fa-school"
  },
  {
    title: "RealityFrame — Web CV & AR Hub",
    category: "aiml",
    description: "Hardware-accelerated computer vision webcam interface with palm gesture recognition, invisibility filter, holographic wireframes, and Three.js 3D renderings.",
    tech: ["React", "TypeScript", "Three.js", "MediaPipe", "Vite"],
    github: "https://github.com/Max-i26/Reality-Spec",
    live: "#",
    icon: "fa-vr-cardboard"
  },
  {
    title: "StealthDrop — Decoy Message Site",
    category: "system",
    description: "Decoy front website housing a password-locked secure text vault running multi-format base encoding, QR codes, and 3-strike self-destruct key protection.",
    tech: ["TypeScript", "HTML5", "CSS3", "Web Crypto API"],
    github: "https://github.com/Max-i26/StealthDrop",
    live: "#",
    icon: "fa-user-secret"
  },
  {
    title: "Pregnify Web — Maternal Care Portal",
    category: "web",
    description: "Dedicated patient registration and care portal designed to assist and monitor pregnant mothers with health tracking metrics.",
    tech: ["Laravel", "Blade", "PHP", "MySQL", "CSS3"],
    github: "https://github.com/sanodyaJinadasa/Pregnify_Web",
    live: "#",
    icon: "fa-baby"
  },
  {
    title: "AUSDAV Connect — Student Association Hub",
    category: "web",
    description: "Centralized association portal for All University Students' Development Association Vavuniya with Supabase auth and state synchronization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn-ui", "Supabase"],
    github: "https://github.com/ausdav-org/ausdav",
    live: "#",
    icon: "fa-graduation-cap"
  },
  {
    title: "Pocket Dictionary API & Glass UI",
    category: "system",
    description: "Synonym and translation microservice using native Ballerina mapping protocols coupled to a sleek glassmorphic client interface.",
    tech: ["Ballerina", "CORS", "JSON Mapping", "JavaScript", "CSS3"],
    github: "https://github.com/Yosa03-dat/iwb25-039-team-syndicate",
    live: "#",
    icon: "fa-book-open"
  },
  {
    title: "ClothNet — B2B Apparel Marketplace",
    category: "web",
    description: "Sri Lankan fashion business hub enabling clothing manufacturers, wholesalers, and retail buyers to exchange quotes and invoices.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Max-i26/ClothNet",
    live: "#",
    icon: "fa-shirt"
  }
];

/* ==========================================================================
   Project Grid Loader & Filtering
   ========================================================================== */
function initProjectLoader() {
  const grid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  if (!grid) return;

  function renderProjects(filterValue = "all") {
    grid.innerHTML = "";
    const filtered = PROJECTS_DATA.filter(proj => 
      filterValue === "all" || proj.category === filterValue
    );

    filtered.forEach(proj => {
      const card = document.createElement("div");
      card.className = "project-card";
      
      const techTags = proj.tech.map(t => `<li class="project-tech-tag">${t}</li>`).join("");
      
      card.innerHTML = `
        <div class="project-card-header">
          <div class="project-icon-wrapper">
            <i class="fa-solid ${proj.icon}"></i>
          </div>
          <div class="project-links">
            <a href="${proj.github}" target="_blank" class="project-link-icon" title="View Source Code"><i class="fa-brands fa-github"></i></a>
            ${proj.live !== "#" ? `<a href="${proj.live}" target="_blank" class="project-link-icon" title="View Live"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
          </div>
        </div>
        <h3 class="project-card-title">${proj.title}</h3>
        <p class="project-card-description">${proj.description}</p>
        <ul class="project-card-tech">
          ${techTags}
        </ul>
      `;
      grid.appendChild(card);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  renderProjects(); // Initial render
}

/* ==========================================================================
   Interactive Terminal Emulator Engine
   ========================================================================== */
function initTerminal() {
  const inputField = document.getElementById("terminal-input-field");
  const historyContainer = document.getElementById("terminal-history");
  const terminalBody = document.getElementById("terminal-body");
  
  if (!inputField || !historyContainer) return;

  // Simple virtual filesystem state
  let currentDir = "~";
  
  const files = {
    "about.txt": "Harol Maxilan - Data Science undergraduate based in Vavuniya, Sri Lanka.\nEducation: B.Sc. Hons in Data Science, SUSL.\nRole: Team Lead of Predictra.\nSpecializes in: Data analysis, machine learning algorithms, and intelligent full-stack products.",
    "skills.json": "{\n  \"languages\": [\"Python\", \"PHP\", \"JavaScript\", \"TypeScript\", \"Ballerina\"],\n  \"machine_learning\": [\"Scikit-Learn\", \"MediaPipe\", \"Data Profiling\", \"LLM pipelines\"],\n  \"databases\": [\"MySQL\", \"MongoDB\"]\n}",
    "contact.txt": "Email: maxilanharrol@gmail.com\nLinkedIn: https://www.linkedin.com/in/harol-maxilan-6b2b16253\nGitHub: https://github.com/Max-i26",
    "projects/Friday.md": "# Friday\nScope: No-code ML pipeline.\nTech: FastAPI, Scikit-Learn, Gemini 3.5 Flash.\nAutomates data profiling and recommendations client/server side.",
    "projects/Nexlab.md": "# NEXLAB\nScope: University booking manager.\nTech: PHP, MySQL, JS.\nEnforces priority conflict scoring and 8-week demand predictive forecasting.",
    "projects/RealityFrame.md": "# RealityFrame\nScope: WebCV gestural controller & AR filters.\nTech: React, Three.js, MediaPipe tracking.",
    "projects/StealthDrop.md": "# StealthDrop\nScope: Decoy platform with base encryption.\nTech: TypeScript, Web Crypto API.\nUses 15-character key gating with decoy content."
  };

  const commandList = {
    help: "List available console shell functions.",
    ls: "List files and directories.",
    cat: "View file contents (e.g. cat about.txt, cat projects/Friday.md).",
    predict: "Simulate training a client-side decision tree ML model.",
    stats: "Display virtual GitHub contribution stats & language Streaks.",
    socials: "Show direct channels of contact.",
    clear: "Clear terminal buffer memory.",
  };

  // Keep terminal focused when clicking inside body
  terminalBody.addEventListener("click", () => {
    inputField.focus();
  });

  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const fullCmd = inputField.value.trim();
      const args = fullCmd.split(" ");
      const cmd = args[0].toLowerCase();
      const targetFile = args[1];

      // Add to terminal history
      appendLine(`maxi@susl-ds:${currentDir}$ ${fullCmd}`, "terminal-prompt-echo");

      if (fullCmd !== "") {
        executeCommand(cmd, targetFile);
      }

      inputField.value = "";
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });

  function appendLine(text, className = "") {
    const line = document.createElement("div");
    line.className = `terminal-output-line ${className}`;
    line.textContent = text;
    historyContainer.appendChild(line);
  }

  function executeCommand(cmd, targetFile) {
    // Normalise command if someone types directory paths directly
    if (cmd === "projects" || cmd === "projects/") {
      appendLine("projects/ is a directory. To list its files, type 'ls projects/'.", "terminal-output-line");
      appendLine("Files inside projects/:");
      Object.keys(files).forEach(f => {
        if (f.startsWith("projects/")) {
          appendLine(`  ${f.replace("projects/", "")}`);
        }
      });
      return;
    }

    switch (cmd) {
      case "help":
        appendLine("Supported system commands:");
        Object.entries(commandList).forEach(([c, d]) => {
          appendLine(`  ${c.padEnd(12)} - ${d}`);
        });
        appendLine("\nTips: You can inspect directories via 'ls projects/' and open markdown descriptions using 'cat projects/Friday.md'.");
        break;

      case "ls":
        if (targetFile === "projects" || targetFile === "projects/") {
          appendLine("Files in directory projects/:");
          Object.keys(files).forEach(f => {
            if (f.startsWith("projects/")) {
              appendLine(`  ${f.replace("projects/", "")}`);
            }
          });
        } else {
          appendLine("Directories and files:");
          appendLine("  projects/     [Dir]");
          Object.keys(files).forEach(f => {
            if (!f.startsWith("projects/")) {
              appendLine(`  ${f}`);
            }
          });
        }
        break;

      case "cat":
        if (!targetFile) {
          appendLine("Error: cat requires a file parameter. (e.g. cat about.txt)", "terminal-output-line terminal-output-error");
        } else if (targetFile === "projects" || targetFile === "projects/") {
          appendLine("Error: 'projects/' is a directory. Use 'ls projects/' to view contents.", "terminal-output-line terminal-output-error");
        } else if (files[targetFile]) {
          appendLine(files[targetFile]);
        } else if (files[`projects/${targetFile}`]) {
          appendLine(files[`projects/${targetFile}`]);
        } else {
          appendLine(`Error: file '${targetFile}' not found.`, "terminal-output-line terminal-output-error");
          appendLine("Tip: Try 'ls' to see files, or check in projects/ (e.g. 'cat projects/Friday.md').");
        }
        break;

      case "predict":
        appendLine("Initializing client-side decision tree pipeline simulation...", "terminal-output-success");
        appendLine("Step 1: Reading dummy features (50 rows x 4 dims)");
        setTimeout(() => {
          appendLine("Step 2: Normalizing sample matrices... [Mean: 0.00 | StdDev: 1.00]");
        }, 300);
        setTimeout(() => {
          appendLine("Step 3: Calculating gini splits & training tree criteria... [Depth: 3]");
        }, 600);
        setTimeout(() => {
          appendLine("Pipeline execution finished successfully!", "terminal-output-success");
          appendLine(">>> R² Accuracy score: 0.9412 (94.12%)", "terminal-output-success");
          terminalBody.scrollTop = terminalBody.scrollHeight;
        }, 900);
        break;

      case "stats":
        appendLine("Fetching Max-i26 stats matrices...");
        appendLine("--------------------------------------------");
        appendLine("  Repositories   : 25 Total (17 Public, 8 Private)");
        appendLine("  Primary Langs  : Python, JavaScript, PHP, TypeScript");
        appendLine("  Streak Stats   : Active (42 consecutive days)");
        appendLine("  Commit Rate    : ~4.7 commits/day during pipeline run");
        appendLine("--------------------------------------------");
        break;

      case "socials":
        appendLine("Direct connections & social coordinates:");
        appendLine("  Email    : maxilanharrol@gmail.com");
        appendLine("  LinkedIn : https://www.linkedin.com/in/harol-maxilan-6b2b16253");
        appendLine("  GitHub   : https://github.com/Max-i26");
        break;

      case "clear":
        historyContainer.innerHTML = "";
        break;

      default:
        appendLine(`Command '${cmd}' not recognized.`, "terminal-output-line terminal-output-error");
        appendLine("Tip: Type 'help' for instructions, 'ls' to list files, or 'cat about.txt' to view file contents.");
        break;
    }
  }
}

/* ==========================================================================
   Data Science Visual Sandbox Engine
   ========================================================================== */
function initSandbox() {
  const scalerSelect = document.getElementById("sandbox-scaler");
  const samplesSlider = document.getElementById("sandbox-samples");
  const samplesVal = document.getElementById("samples-val");
  const noiseCheckbox = document.getElementById("sandbox-noise");
  const runBtn = document.getElementById("run-pipeline-btn");
  
  const metricMean = document.getElementById("metric-mean");
  const metricStd = document.getElementById("metric-std");
  const metricRange = document.getElementById("metric-range");
  
  const canvas = document.getElementById("sandbox-chart");
  if (!canvas || !scalerSelect) return;

  let chartInstance = null;
  let rawData = [];

  // Generate initial datasets
  function generateData() {
    const size = parseInt(samplesSlider.value);
    samplesVal.textContent = size;
    
    rawData = [];
    const injectNoise = noiseCheckbox.checked;

    for (let i = 0; i < size; i++) {
      // Base non-linear relationship y = sin(x) * 10
      const x = (i / size) * 4 * Math.PI - (2 * Math.PI);
      let y = Math.sin(x) * 10;
      
      if (injectNoise) {
        // Box-Muller transform for Gaussian Noise
        const u1 = Math.random();
        const u2 = Math.random();
        const randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        y += randStdNormal * 1.8;
      }
      
      rawData.push({ x: parseFloat(x.toFixed(3)), y: parseFloat(y.toFixed(3)) });
    }
  }

  function runPipeline() {
    generateData();
    const mode = scalerSelect.value;
    let processedData = [];

    const yValues = rawData.map(d => d.y);
    const n = yValues.length;
    
    // Calculate raw statistics
    const mean = yValues.reduce((a, b) => a + b, 0) / n;
    const variance = yValues.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);
    const min = Math.min(...yValues);
    const max = Math.max(...yValues);

    // Apply Transformation Scalers
    if (mode === "none") {
      processedData = rawData.map(d => ({ x: d.x, y: d.y }));
      updateMetrics(mean, stdDev, min, max);
    } else if (mode === "minmax") {
      // MinMax Scaler formula: (x - min) / (max - min)
      const denominator = max - min === 0 ? 1 : max - min;
      processedData = rawData.map(d => ({
        x: d.x,
        y: parseFloat(((d.y - min) / denominator).toFixed(4))
      }));
      const newY = processedData.map(d => d.y);
      const newMean = newY.reduce((a, b) => a + b, 0) / n;
      const newVar = newY.reduce((a, b) => a + Math.pow(b - newMean, 2), 0) / n;
      updateMetrics(newMean, Math.sqrt(newVar), 0.0, 1.0);
    } else if (mode === "standard") {
      // Standard Scaler formula: (x - mean) / stdDev
      const denom = stdDev === 0 ? 1 : stdDev;
      processedData = rawData.map(d => ({
        x: d.x,
        y: parseFloat(((d.y - mean) / denom).toFixed(4))
      }));
      const newY = processedData.map(d => d.y);
      const newMean = newY.reduce((a, b) => a + b, 0) / n;
      const newVar = newY.reduce((a, b) => a + Math.pow(b - newMean, 2), 0) / n;
      updateMetrics(newMean, Math.sqrt(newVar), Math.min(...newY), Math.max(...newY));
    }

    renderChart(processedData);
  }

  function updateMetrics(mean, std, min, max) {
    metricMean.textContent = mean.toFixed(3);
    metricStd.textContent = std.toFixed(3);
    metricRange.textContent = `${min.toFixed(2)} / ${max.toFixed(2)}`;
  }

  function renderChart(dataPoints) {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = canvas.getContext("2d");
    chartInstance = new Chart(ctx, {
      type: "scatter",
      data: {
        datasets: [{
          label: "Processed Pipeline Elements",
          data: dataPoints,
          backgroundColor: "#10b981",
          borderColor: "rgba(16, 185, 129, 0.4)",
          borderWidth: 1,
          pointRadius: 4,
          pointHoverRadius: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.05)"
            },
            ticks: {
              color: "#9ca3af",
              font: {
                family: "Fira Code"
              }
            }
          },
          y: {
            grid: {
              color: "rgba(255, 255, 255, 0.05)"
            },
            ticks: {
              color: "#9ca3af",
              font: {
                family: "Fira Code"
              }
            }
          }
        }
      }
    });
  }

  // Update slider displays live
  samplesSlider.addEventListener("input", () => {
    samplesVal.textContent = samplesSlider.value;
  });

  // Action listeners
  runBtn.addEventListener("click", runPipeline);
  scalerSelect.addEventListener("change", runPipeline);

  // Run pipeline initially on page load
  runPipeline();
}

/* ==========================================================================
   Scroll Trigger Observers (Entry Animations & Skill grow)
   ========================================================================== */
function initScrollObservers() {
  // Glow progress bars when the skills section goes into viewport
  const skillsGrid = document.querySelector(".skills-wrapper");
  
  if (skillsGrid) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".skill-bar-inner");
          bars.forEach(bar => {
            const w = bar.getAttribute("data-width");
            bar.style.width = w;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(skillsGrid);
  }
}

/* ==========================================================================
   Contact Form Secure Validator & Mock Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback-message");
  
  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.className = "form-feedback";
    feedback.textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !msg) {
      feedback.classList.add("error");
      feedback.textContent = "Please fill in all the message fields.";
      return;
    }

    // Mock pipeline submission loader
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Processing Secure Pipeline...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      // Success feedback animation
      feedback.classList.add("success");
      feedback.innerHTML = `<i class="fa-regular fa-circle-check"></i> Hello ${name}! Your secure message has been validated and queued for delivery. Thanks for reaching out.`;
      
      form.reset();
    }, 1500);
  });
}

/* ==========================================================================
   Responsive Header Scrolled Background
   ========================================================================== */
function initNavbarScroll() {
  const header = document.getElementById("main-header");
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu display toggler
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      const isVisible = navLinks.style.display === "flex";
      navLinks.style.display = isVisible ? "none" : "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "100%";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.background = "rgba(8, 13, 22, 0.95)";
      navLinks.style.padding = "2rem";
      navLinks.style.borderBottom = "1px solid var(--border-color)";
    });
  }
}
