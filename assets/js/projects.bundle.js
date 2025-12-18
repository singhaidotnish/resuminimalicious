const projects = [
    {name: "neo-titanium-mp", image: "/assets/projects/neo-titanium-mp.jpg", description: "Monorepo scaffold for modern pipelines / MP utilities.", url: "https://zarir-engineer.github.io/neo-titanium-global-enery/", color: "#4A90E2"},
    {name: "aipyqtfylicious", image: "/assets/projects/aipyqtfylicious.png", description: "AI‑infused PyQt toolkit and sample apps.", url: "#", color: "#E24A4A"},
    {name: "varsity-audio-monorepo", image: "/assets/projects/varsity-audio-monorepo.png", description: "Varsity chapters → scrape, TTS, upload pipeline.", url: "https://varsity-audio-monorepo-frontend.onrender.com", color: "#50C878"},
    {name: "minimalgotronifylicious", image: "/assets/projects/minimalgotronifylicious.png", description: "Minimal, AI‑ready monorepo with docs & scripts.", url: "#", color: "#9B59B6"},
    {name: "hyperfotopixelicious", image: "/assets/projects/hyperfotopixelicious.png", description: "Imaging & VFX experiments, tools, and pipelines.", url: "#", color: "#F39C12"},
    {name: "newtabfirefoxylicious", image: "/assets/projects/newtabfirefoxylicious.jpg", description: "Custom new‑tab experiments for Firefox.", url: "https://singhaidotnish.github.io/newtabfirefoxylicious/", color: "#E67E22"},
    {name: "dm-mindmap", image: "/assets/projects/solar-system.jpg", description: "3D mindmap visualization tool", url: "#", color: "#1ABC9C"},
    {name: "TubeSidecarificity", image: "/assets/projects/tubesidecarificity.png", description: "YouTube sidecar tools: local ffmpeg, metadata, MP3.", url: "#", color: "#34495E"}
];

let currentIndex = 0;
let isAnimating = false;
let autoRotate = true;
let autoRotateInterval;

const stage = document.getElementById("stage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const autoRotateBtn = document.getElementById("autoRotateBtn");
const dotNav = document.getElementById("dotNav");
const currentNum = document.getElementById("currentNum");
const totalNum = document.getElementById("totalNum");

function init() {
    totalNum.textContent = projects.length;
    createCards();
    createDots();
    updateCarousel();
    startAutoRotate();
}

function createCards() {
    projects.forEach((project, index) => {
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "card-wrapper";
        cardWrapper.dataset.index = index;
        
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.style.background = `linear-gradient(135deg, ${project.color}20, ${project.color}40)`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}" 
                        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23333%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EProject%3C/text%3E%3C/svg%3E'">
                ${project.url !== "#" ? 
                    `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="external-link">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>` : ""}
            </div>
            <div class="project-info">
                <h3 class="project-name">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="featured-badge">
                    <span class="badge">Featured</span>
                </div>
            </div>
        `;
        
        cardWrapper.appendChild(projectCard);
        stage.appendChild(cardWrapper);
    });
}

function createDots() {
    projects.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.dataset.index = index;
        dot.setAttribute("aria-label", `Go to project ${index + 1}`);
        dot.addEventListener("click", () => goToSlide(index));
        dotNav.appendChild(dot);
    });
}

function getCardStyle(index) {
    const position = (index - currentIndex + projects.length) % projects.length;
    const angle = (360 / projects.length) * position;
    const x = 450 * Math.sin(angle * Math.PI / 180);
    const z = 450 * Math.cos(angle * Math.PI / 180) - 450;
    
    let scale = 1;
    let opacity = 1;
    let zIndex = 0;
    
    if (position === 0) { // Center card
        scale = 1.15;
        opacity = 1;
        zIndex = 10;
    } else if (position === 1 || position === projects.length - 1) { // Adjacent cards
        scale = 0.8;
        opacity = 0.6;
        zIndex = 5;
    } else if (position === 2 || position === projects.length - 2) { // Further cards
        scale = 0.6;
        opacity = 0.3;
        zIndex = 3;
    } else { // Background cards
        scale = 0.45;
        opacity = 0.15;
        zIndex = 1;
    }
    
    return {
        transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg) scale(${scale})`,
        opacity: opacity,
        zIndex: zIndex,
        pointerEvents: position === 0 ? "auto" : "none"
    };
}

function updateCarousel() {
    document.querySelectorAll(".card-wrapper").forEach((card, index) => {
        const style = getCardStyle(index);
        card.style.transform = style.transform;
        card.style.opacity = style.opacity;
        card.style.zIndex = style.zIndex;
        card.style.pointerEvents = style.pointerEvents;
        
        if ((index - currentIndex + projects.length) % projects.length === 0) {
            card.classList.add("center");
        } else {
            card.classList.remove("center");
        }
    });
    
    document.querySelectorAll(".dot").forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
    
    currentNum.textContent = currentIndex + 1;
}

function handleNext() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
    setTimeout(() => { isAnimating = false; }, 600);
}

function handlePrev() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel();
    setTimeout(() => { isAnimating = false; }, 600);
}

function goToSlide(index) {
    if (isAnimating || index === currentIndex) return;
    isAnimating = true;
    currentIndex = index;
    autoRotate = false;
    stopAutoRotate();
    updateAutoRotateButton();
    updateCarousel();
    setTimeout(() => { isAnimating = false; }, 600);
}

function startAutoRotate() {
    autoRotateInterval = setInterval(handleNext, 4000);
}

function stopAutoRotate() {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
    }
}

function toggleAutoRotate() {
    autoRotate = !autoRotate;
    if (autoRotate) {
        startAutoRotate();
    } else {
        stopAutoRotate();
    }
    updateAutoRotateButton();
}

function updateAutoRotateButton() {
    autoRotateBtn.textContent = autoRotate ? "⏸ Pause Auto-Rotate" : "▶ Resume Auto-Rotate";
}

// Event Listeners
prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);
autoRotateBtn.addEventListener("click", toggleAutoRotate);

stage.addEventListener("mouseenter", () => {
    if (autoRotate) stopAutoRotate();
});

stage.addEventListener("mouseleave", () => {
    if (autoRotate) startAutoRotate();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
});

// Initialize
init();