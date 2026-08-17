# NovaFolio - Premium Interactive Data Science Portfolio

Welcome to **NovaFolio**, the interactive web portfolio of **Harol Maxilan** (aka Maxi). 

This project showcases engineering-grade implementation, integrating interactive data science visualization playgrounds and browser-based terminal interfaces to present credentials in a high-fidelity visual context.

---

## 🚀 Key Features

1. **Interactive Virtual Bash Terminal**:
   - An in-browser mock console allowing visitors to inspect projects and files, run model predictions, check profile statistics, and look up communication handles.
   
2. **Visual Pre-processing Sandbox**:
   - An interactive data science utility implementing mathematical scaling transforms (Z-Score Standardization, Min-Max [0, 1] Scaling) on synthetic datasets in real-time. Rendered using Chart.js on the client.
   
3. **Responsive Multi-Category Showcase**:
   - Dynamic grid showcasing key repositories filtered by classifications (AI/ML/Data Science, Full-Stack Web, System Utilities).
   
4. **Acquired Competency Tracking**:
   - Scroll-triggered animated skill indexes tracking languages, analytical frameworks, and database engines.

---

## 🛠️ Technology Stack

- **Structure**: Semantic HTML5 markup.
- **Styling**: Vanilla CSS3 utilizing custom properties, CSS Grid, Flexbox, keyframe animations, and modern glassmorphic overlays.
- **Client Scripts**: Vanilla JavaScript (ES6+).
- **Libraries**:
  - [Chart.js](https://www.chartjs.org/) (Data visualization)
  - [FontAwesome](https://fontawesome.com/) (Vector iconography)

---

## 💻 Local Setup & Development

To host the portfolio or run it locally for customization, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Max-i26/Portfolio.git
   cd Portfolio
   ```

2. **Open index.html**:
   - Open `index.html` directly in any web browser, or serve it using a lightweight development server like VS Code Live Server or Python's HTTP server:
   ```sh
   python -m http.server 8000
   ```
   - Navigate to `http://localhost:8000` in your browser.

---

## 📑 Repository Structure

- `index.html` - Core layout structure containing SEO headers and section blocks.
- `index.css` - Unified design system, spacing guides, and responsiveness rules.
- `index.js` - Terminal interpreter, sandbox calculation algorithms, and form validations.
- `maxx.jpg` - User profile avatar.