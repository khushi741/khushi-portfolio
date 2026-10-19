# 🌸 Khushi Nayak — AI Engineer Portfolio
## *“Building Intelligence, Beautifully.”* • Elegant Dusty-Rose & Warm Ivory Editorial Portfolio

An editorial personal-brand portfolio website for **Khushi Nayak** (AI Engineer), crafted with high-fashion luxury typography, an asymmetrical split-screen hero composition, muted dusty-rose (`#DDAEAA`) and warm ivory (`#F8F3ED`) tones, deep burgundy (`#75443F`) accents, and an art-directed project gallery showcasing authentic machine learning and agentic systems.

---

## 🎨 Design System & Palette

- **Dusty Rose Pink:** `#DDAEAA`
- **Warm Ivory:** `#F8F3ED`
- **Deep Muted Burgundy:** `#75443F` (Primary CTAs, wordmarks, active states)
- **Soft Dark Brown:** `#513B38` (High-contrast typography)
- **White:** `#FFFFFF` (Surface contrast for editorial cards)
- **Typography:**
  - Calligraphic Script: `Alex Brush`, `Pinyon Script` (Khushi's signature wordmark & section labels)
  - High-Contrast Serif: `Bodoni Moda`, `Playfair Display`, `Cormorant Garamond` (Headlines, titles, metrics)
  - Clean Sans-Serif: `Plus Jakarta Sans` (Body text, technical tags, navigation, buttons)

---

## 🏛️ Sections & Architecture

1. **Top Dusty-Rose Navbar:**
   - Calligraphic cursive wordmark (*Khushi Nayak*).
   - Minimal center navigation: Home, About, Projects, Experience, Skills, Contact.
   - Verified GitHub & LinkedIn icons + direct PDF Resume badge.
   - Accessible mobile menu drawer.
2. **Asymmetrical Split-Screen Hero:**
   - **Left Panel (~48% width, Warm Ivory `#F8F3ED`):** Large vertically oriented portrait frame with generous margins, decorative vertical label (*“AI ENGINEER • EDITORIAL FOLIO • 2026”*), corner filigree, and editable portrait fallback.
   - **Right Panel (~52% width, Dusty Rose `#DDAEAA`):** Large serif headline (*“Building Intelligence, Beautifully.”*), professional introduction, deep burgundy pill CTA (*“Explore My Work →”*), and current role status ribbon (*Tedekstra*).
3. **About Section (“A Little About Me”):**
   - Perspective essay on bridging machine learning with design refinement.
   - Official engineering dossier card detailing education (*USAR Delhi B.Tech AI & ML*), current role (*Tedekstra*), and LeetCode problem solving (*250+ solved*).
4. **Selected Works (Art-Directed Editorial Gallery):**
   - Curated showcase of all 4 authentic projects:
     1. **Deep Research AI** (Autonomous Multi-Step Web Research Agent)
     2. **AI Self-Healing Test Agent** (Natural Language Testing & Vector Recovery)
     3. **Packet Analyzer** (Hybrid C++17 DPI + Random Forest Classifier)
     4. **Seizure Prediction Suite** (Dual-Branch SBM-MSTM Deep Learning Framework)
   - Category filtering, metrics ribbons, technology pills, direct GitHub links, and interactive modal drawers.
5. **Experience (“My Journey”):**
   - Vertical burgundy timeline with ivory node markers for Tedekstra, Prodigal AI, IBM, and USAR Delhi.
6. **Skills (“My Technical Toolkit”):**
   - Clean categorical layout across Programming, Generative AI & LLMs, Machine Learning, Backend/Cloud/MLOps, and Frameworks/Frontend.
7. **Contact (“Let's Build Something Intelligent.”):**
   - Split layout with direct channels (Email with 1-click copy toast, LinkedIn, GitHub, phone, location) and a contrasting ivory form with pre-formatted email dispatch.
8. **Editorial Footer:**
   - Back to top button, social links, and copyright signature.

---

## 📁 Centralized Configuration File

All personal details, portrait path, project data, metrics, experience, skills, and links are located in:

📁 **`src/data/portfolioData.ts`**

To customize:
- Set your preferred photo path at `personal.portraitUrl` (e.g. drop your photo into `public/images/portrait_khushi.jpg`).
- Update your contact links, bio, or add new projects directly in this file.

---

## 🚀 Quickstart & Development

### 1. Run Development Server
```bash
npm run dev
```
Starts Vite dev server on **http://localhost:5174/** (or double-click `start_dev.bat`).

### 2. Build for Production
```bash
npm run build
```
Generates the production bundle in `dist/` (or double-click `build.bat`).
