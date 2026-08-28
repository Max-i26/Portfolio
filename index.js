/* ==========================================================================
   NovaFolio - Core Interactive Engine
   Author: Harol Maxilan
   ========================================================================== */

   document.addEventListener("DOMContentLoaded", () => {
    initProjectLoader();
    initTerminal();
    initArcade();
    initScrollObservers();
    initContactForm();
    initNavbarScroll();
  });
  
  /* ==========================================================================
     Global Helper Data
     ========================================================================== */
  const PROJECTS_DATA = [
    {
      title: "Friday — Automated ML Pipeline",
      category: "aiml",
      description: "Automated machine learning pipeline for dataset profiling, preprocessing, and model training (Scikit-Learn) with an interactive tutor interface.",
      tech: ["Python", "Scikit-Learn", "FastAPI", "Gemini SDK", "JavaScript"],
      github: "https://github.com/Max-i26/Friday",
      live: "#",
      icon: "fa-robot"
    },
    {
      title: "StealthDrop — Secure Vault",
      category: "system",
      description: "Decoy text vault utility supporting multi-format base encoding, QR code generations, and security self-destruct mechanisms.",
      tech: ["TypeScript", "HTML5", "CSS3", "Web Crypto API"],
      github: "https://github.com/Max-i26/StealthDrop",
      live: "#",
      icon: "fa-user-secret"
    },
    {
      title: "CARE-CODE — Hospital System",
      category: "web",
      description: "Centralized patients and hospital system managing records, appointments, doctor availability, and database profiles.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Max-i26/CARE-CODE",
      live: "#",
      icon: "fa-hospital"
    },
    {
      title: "ClothNet — B2B Apparel Marketplace",
      category: "web",
      description: "Sri Lankan fashion business hub enabling clothing manufacturers, wholesalers, and retail buyers to exchange quotes and invoices.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Max-i26/ClothNet",
      live: "#",
      icon: "fa-shirt"
    },
    {
      title: "NLP-Emotion-Detection — OpenCV",
      category: "aiml",
      description: "Natural Language Processing (NLP) models designed to classify textual input emotions, paired with OpenCV real-time video modules.",
      tech: ["Python", "OpenCV", "NLTK", "Scikit-Learn", "Flask"],
      github: "https://github.com/Max-i26/NLP-Emotion-Detection",
      live: "#",
      icon: "fa-brain"
    },
    {
      title: "f1-analytics — Bahrain GP Analysis",
      category: "aiml",
      description: "Exploratory data analysis of the 2024 Bahrain Grand Prix race parameters, lap timings, driver performance, and tire strategies.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      github: "https://github.com/Max-i26/f1-analytics",
      live: "#",
      icon: "fa-car-side"
    },
    {
      title: "Reality-Spec — Interactive Specs",
      category: "system",
      description: "An interactive, fun web project showcasing computer vision controls, interactive assets, and real-time frontend scripting.",
      tech: ["JavaScript", "HTML5", "CSS3", "Three.js"],
      github: "https://github.com/Max-i26/Reality-Spec",
      live: "#",
      icon: "fa-vr-cardboard"
    },
    {
      title: "Health-Analytics — Risk Prediction",
      category: "aiml",
      description: "A machine learning approach for patient risk factor prediction using classified medical datasets and data analytics dashboards.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "NumPy"],
      github: "https://github.com/Max-i26/Health-Analytics",
      live: "#",
      icon: "fa-heart-pulse"
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
        card.className = "project-card reveal-element";
        
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
      observeNewReveals();
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
          appendLine("[SYSTEM] Initializing Exam Pass Predictor Model (Gini Decision Tree)...", "terminal-output-success");
          appendLine("-------------------------------------------------------------------");
          appendLine("Task context: Predict the likelihood of Sabaragamuwa University (SUSL) ");
          appendLine("undergraduates passing their Capstone proposal based on 4 features:");
          appendLine("  1. Study hours/week (Range: 10 - 60)");
          appendLine("  2. Library hours/week (Range: 2 - 20)");
          appendLine("  3. Caffeine intake/day (Range: 0 - 5 cups)");
          appendLine("  4. Sleep hours/night (Range: 4 - 9)");
          appendLine("-------------------------------------------------------------------");
          appendLine("Training model on 120 historical student matrices...");
          
          setTimeout(() => {
            appendLine("- Preprocessing raw datasets... done.");
            appendLine("- Calculating Gini Impurity splits... done.");
            appendLine("- Optimizing decision depth criteria... done.");
            terminalBody.scrollTop = terminalBody.scrollHeight;
          }, 300);
  
          setTimeout(() => {
            appendLine("\n>>> Decision Tree trained successfully!", "terminal-output-success");
            appendLine(">>> R² Accuracy score: 0.9412 (94.12%)", "terminal-output-success");
            appendLine("\nFeature Importance Weights:");
            appendLine("  - Study hours/week      : 48% (Highest influence)");
            appendLine("  - Sleep hours/night     : 28% (Critical recovery index)");
            appendLine("  - Caffeine intake/day   : 14% (Alertness factor)");
            appendLine("  - Library hours/week    : 10% (Reference resource usage)");
            appendLine("\nPrediction Inference Rules:");
            appendLine("  IF (Study Hours > 25/week) AND (Sleep > 6 hours/night) --> 98% PASS probability.");
            appendLine("  IF (Study Hours < 15/week) AND (Sleep < 5 hours/night) --> 22% FAIL/RE-ATTEMPT risk.");
            appendLine("\nWhy is this used?");
            appendLine("Predictive modeling is used by academic advisors to identify 'at-risk' students");
            appendLine("early in the semester and recommend study adjustments before the final capstone proposal.");
            terminalBody.scrollTop = terminalBody.scrollHeight;
          }, 700);
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
     Data Science Arcade & Game Zone
     ========================================================================== */
function initArcade() {
  const noiseCheckbox = document.getElementById("sandbox-noise");
  const runBtn = document.getElementById("run-pipeline-btn");
  
  const metricMean = document.getElementById("metric-mean");
  const metricStd = document.getElementById("metric-std");
  const metricRange = document.getElementById("metric-range");
  
  const gameCanvas = document.getElementById("game-canvas");
  if (!gameCanvas) return;

  let gameInterval = null;
  let snake = [];
  let food = {};
  let obstacles = [];
  let dx = 10;
  let dy = 0;
  let score = 0;
  let highScore = 0;
  const gridScale = 10;
  const canvasWidth = 400;
  const canvasHeight = 300;

  function startGame() {
    score = 0;
    snake = [
      { x: 150, y: 150 },
      { x: 140, y: 150 },
      { x: 130, y: 150 },
      { x: 120, y: 150 }
    ];
    dx = 10;
    dy = 0;
    obstacles = [];

    // Inject Gaussian Noise (Obstacles) if selected
    if (noiseCheckbox && noiseCheckbox.checked) {
      const obstacleCount = 5;
      for (let i = 0; i < obstacleCount; i++) {
        obstacles.push({
          x: Math.floor(Math.random() * (canvasWidth / gridScale)) * gridScale,
          y: Math.floor(Math.random() * (canvasHeight / gridScale)) * gridScale
        });
      }
    }

    spawnFood();
    updateGameScorecard();
    
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 100);
    
    window.addEventListener("keydown", handleGameKeys);
  }

  function spawnFood() {
    food.x = Math.floor(Math.random() * (canvasWidth / gridScale)) * gridScale;
    food.y = Math.floor(Math.random() * (canvasHeight / gridScale)) * gridScale;
    
    // Ensure food is not on snake or obstacles
    let onSnake = snake.some(part => part.x === food.x && part.y === food.y);
    let onObstacle = obstacles.some(obs => obs.x === food.x && obs.y === food.y);
    
    if (onSnake || onObstacle) {
      spawnFood();
    }
  }

  function gameLoop() {
    if (hasGameEnded()) {
      if (gameInterval) clearInterval(gameInterval);
      window.removeEventListener("keydown", handleGameKeys);
      
      // Game Over display
      const ctx = gameCanvas.getContext("2d");
      ctx.fillStyle = "rgba(5, 8, 15, 0.85)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 16px 'Fira Code', monospace";
      ctx.textAlign = "center";
      ctx.fillText("MODEL CRASHED (Game Over)", canvasWidth / 2, canvasHeight / 2 - 10);
      ctx.fillStyle = "#f3f4f6";
      ctx.font = "13px 'Inter', sans-serif";
      const trainedAcc = (70 + score * 1.5).toFixed(2);
      ctx.fillText(`Trained on ${score} samples. Accuracy: ${Math.min(trainedAcc, 99.9)}%`, canvasWidth / 2, canvasHeight / 2 + 20);
      ctx.fillText("Press Space or click Start to retrain", canvasWidth / 2, canvasHeight / 2 + 50);
      return;
    }

    clearCanvas();
    drawObstacles();
    drawFood();
    moveSnake();
    drawSnake();
  }

  function clearCanvas() {
    const ctx = gameCanvas.getContext("2d");
    ctx.fillStyle = "#05080f";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }

  function drawSnake() {
    const ctx = gameCanvas.getContext("2d");
    snake.forEach((part, index) => {
      ctx.fillStyle = index === 0 ? "#10b981" : "#059669";
      ctx.strokeStyle = "#080d16";
      ctx.fillRect(part.x, part.y, gridScale, gridScale);
      ctx.strokeRect(part.x, part.y, gridScale, gridScale);
    });
  }

  function drawObstacles() {
    const ctx = gameCanvas.getContext("2d");
    ctx.fillStyle = "#f59e0b"; // Yellow warning color for noise obstacles
    obstacles.forEach(obs => {
      ctx.fillRect(obs.x, obs.y, gridScale, gridScale);
      ctx.strokeStyle = "#080d16";
      ctx.strokeRect(obs.x, obs.y, gridScale, gridScale);
    });
  }

  function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    const hasEatenFood = snake[0].x === food.x && snake[0].y === food.y;
    if (hasEatenFood) {
      score++;
      if (score > highScore) highScore = score;
      spawnFood();
      updateGameScorecard();
    } else {
      snake.pop();
    }
  }

  // Check game boundary and self collision
  function hasGameEnded() {
    for (let i = 4; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    
    let hitObstacle = obstacles.some(obs => obs.x === snake[0].x && obs.y === snake[0].y);
    if (hitObstacle) return true;

    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x >= canvasWidth;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y >= canvasHeight;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
  }

  function drawFood() {
    const ctx = gameCanvas.getContext("2d");
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(food.x + gridScale / 2, food.y + gridScale / 2, gridScale / 2 - 1, 0, 2 * Math.PI);
    ctx.fill();
  }

  function handleGameKeys(e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", " "].includes(e.key)) {
      e.preventDefault();
    }

    if ((e.key === "Space" || e.key === " ") && hasGameEnded()) {
      startGame();
      return;
    }

    const goingUp = dy === -gridScale;
    const goingDown = dy === gridScale;
    const goingRight = dx === gridScale;
    const goingLeft = dx === -gridScale;

    switch (e.key) {
      case "ArrowLeft":
        if (!goingRight) { dx = -gridScale; dy = 0; }
        break;
      case "ArrowUp":
        if (!goingDown) { dx = 0; dy = -gridScale; }
        break;
      case "ArrowRight":
        if (!goingLeft) { dx = gridScale; dy = 0; }
        break;
      case "ArrowDown":
        if (!goingUp) { dx = 0; dy = gridScale; }
        break;
    }
  }

  function updateGameScorecard() {
    metricMean.textContent = `${score} samples`;
    metricStd.textContent = `${highScore} samples`;
    const accVal = (70 + score * 1.5).toFixed(2);
    metricRange.textContent = `${Math.min(accVal, 99.90)}%`;
  }

  if (runBtn) {
    runBtn.addEventListener("click", startGame);
  }

  // Draw initial game menu/start screens
  clearCanvas();
  const ctx = gameCanvas.getContext("2d");
  ctx.fillStyle = "#10b981";
  ctx.font = "bold 16px 'Fira Code', monospace";
  ctx.textAlign = "center";
  ctx.fillText("DATA COLLECTOR ARCADE", canvasWidth / 2, canvasHeight / 2 - 20);
  ctx.fillStyle = "#9ca3af";
  ctx.font = "13px 'Inter', sans-serif";
  ctx.fillText("Click 'Start New Training Session' to play", canvasWidth / 2, canvasHeight / 2 + 15);
  ctx.fillText("Control snake with Arrow Keys", canvasWidth / 2, canvasHeight / 2 + 40);
}
  
  /* ==========================================================================
     Scroll Trigger Observers (Entry Animations & Skill grow)
     ========================================================================== */
  let revealObserver;

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

    // Scroll Reveal Observers (Up & Down scroll animations)
    const revealElements = document.querySelectorAll(".reveal-element");
    
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        } else {
          // Remove transition class if scrolling up past elements to allow re-triggering
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("revealed");
          }
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Helper to register new reveal targets dynamically (like after project filter runs)
  function observeNewReveals() {
    if (!revealObserver) return;
    const revealElements = document.querySelectorAll(".reveal-element:not(.revealed)");
    revealElements.forEach(el => revealObserver.observe(el));
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
  
      // Submission loader
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Sending message...`;
  
      fetch("https://formsubmit.co/ajax/maxilanharrol@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: msg
        })
      })
      .then(response => response.json())
      .then(data => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        feedback.classList.add("success");
        feedback.innerHTML = `<i class="fa-regular fa-circle-check"></i> Message sent successfully! Please check your email inbox to verify FormSubmit activation if this is your first submission.`;
        form.reset();
      })
      .catch(error => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        feedback.classList.add("error");
        feedback.textContent = "Network error. Please email maxilanharrol@gmail.com directly.";
      });
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