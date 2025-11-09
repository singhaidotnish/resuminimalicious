---
layout: splash
permalink: /projects/
---

<style>
    /* Aggressively hide ALL sidebars and navigation */
    .sidebar,
    .sidebar__right,
    .page__related,
    .page__meta,
    .page__share,
    .page-author,
    .toc,
    .toc__menu,
    #site-nav,
    .author-profile,
    .author__urls-wrapper,
    .author__urls,
    nav.greedy-nav,
    .page__footer-follow,
    aside {
        display: none !important;
        visibility: hidden !important;
        width: 0 !important;
        height: 0 !important;
    }
    
    /* Force full width */
    .page,
    .page__content,
    .page__inner-wrap,
    #main {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    body {
        margin: 0;
        padding: 0;
    }

    /* Carousel wrapper - contained background */
    .carousel-wrapper {
        width: 100%;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        padding: 0.5rem 1rem 2rem 1rem;
        margin: 0 auto;
    }

    .carousel-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .carousel-header {
        text-align: center;
        margin-bottom: 1.5rem;
        padding-top: 0.5rem;
    }

    .carousel-header h1 {
        font-size: 2.8rem;
        font-weight: 700;
        color: white;
        margin-bottom: 0.3rem;
        text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .carousel-header p {
        font-size: 1.1rem;
        color: #c4b5fd;
    }

    .stage-container {
        position: relative;
        height: 450px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        perspective: 1800px;
    }

    .stage {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }

    .card-wrapper {
        position: absolute;
        width: 280px;
        height: 380px;
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        left: 50%;
        top: 50%;
        margin-left: -140px;
        margin-top: -190px;
    }

    .project-card {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .card-wrapper.center .project-card {
        box-shadow: 0 0 0 3px #a78bfa, 0 30px 60px -12px rgba(0, 0, 0, 0.6);
    }

    .project-image {
        position: relative;
        height: 200px;
        overflow: hidden;
        background: #1f2937;
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .card-wrapper.center .project-image img {
        transform: scale(1.05);
    }

    .external-link {
        position: absolute;
        top: 0.8rem;
        right: 0.8rem;
        background: rgba(255, 255, 255, 0.9);
        padding: 0.4rem;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;
        text-decoration: none;
        display: none;
    }

    .card-wrapper.center .external-link {
        display: block;
    }

    .external-link:hover {
        background: white;
        transform: scale(1.1);
    }

    .external-link svg {
        width: 18px;
        height: 18px;
        display: block;
    }

    .project-info {
        padding: 1.2rem;
        background: rgba(17, 24, 39, 0.8);
        backdrop-filter: blur(10px);
        height: 180px;
        display: flex;
        flex-direction: column;
    }

    .project-name {
        font-size: 1.2rem;
        font-weight: 700;
        color: white;
        margin-bottom: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .project-description {
        color: #d1d5db;
        line-height: 1.5;
        font-size: 0.85rem;
    }

    .featured-badge {
        display: none;
        margin-top: auto;
    }

    .card-wrapper.center .featured-badge {
        display: flex;
        gap: 0.5rem;
    }

    .badge {
        padding: 0.2rem 0.6rem;
        background: rgba(168, 85, 247, 0.3);
        color: #ddd6fe;
        border-radius: 9999px;
        font-size: 0.8rem;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 0.8rem;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease;
        z-index: 100;
    }

    .nav-button:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-50%) scale(1.1);
    }

    .nav-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .nav-button svg {
        width: 28px;
        height: 28px;
        color: white;
        display: block;
    }

    .nav-button.prev {
        left: 1.5rem;
    }

    .nav-button.next {
        right: 1.5rem;
    }

    .dot-navigation {
        display: flex;
        justify-content: center;
        gap: 0.6rem;
        margin-bottom: 1.2rem;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .dot:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.5);
    }

    .dot.active {
        width: 40px;
        height: 10px;
        border-radius: 5px;
        background: #a78bfa;
    }

    .dot:disabled {
        cursor: not-allowed;
    }

    .controls {
        text-align: center;
        margin-bottom: 1rem;
    }

    .auto-rotate-button {
        padding: 0.6rem 1.2rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        color: white;
        border: none;
        border-radius: 9999px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.9rem;
    }

    .auto-rotate-button:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }

    .project-counter {
        text-align: center;
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        padding-bottom: 0.8rem;
    }

    .project-counter .current {
        font-weight: 700;
        color: #a78bfa;
    }

    .project-counter .total {
        font-weight: 700;
    }

    @media (max-width: 768px) {
        .carousel-header h1 {
            font-size: 2rem;
        }

        .stage-container {
            height: 400px;
        }

        .card-wrapper {
            width: 260px;
            height: 350px;
            margin-left: -130px;
            margin-top: -175px;
        }

        .project-image {
            height: 160px;
        }

        .project-info {
            height: 190px;
        }

        .nav-button {
            padding: 0.6rem;
        }

        .nav-button svg {
            width: 22px;
            height: 22px;
        }

        .nav-button.prev {
            left: 0.5rem;
        }

        .nav-button.next {
            right: 0.5rem;
        }
    }
</style>

<div class="carousel-wrapper">
    <div class="carousel-container">
        <!-- Header -->
        <div class="carousel-header">
            <h1>+++ Projects Gallery</h1>
            <p>Explore my portfolio in 3D</p>
        </div>

        <!-- Carousel Stage -->
        <div class="stage-container">
            <div class="stage" id="stage"></div>

            <!-- Navigation Buttons -->
            <button class="nav-button prev" id="prevBtn" aria-label="Previous project">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button class="nav-button next" id="nextBtn" aria-label="Next project">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <!-- Dot Navigation -->
        <div class="dot-navigation" id="dotNav"></div>

        <!-- Controls -->
        <div class="controls">
            <button class="auto-rotate-button" id="autoRotateBtn">
                ⏸ Pause Auto-Rotate
            </button>
        </div>

        <!-- Project Counter -->
        <div class="project-counter">
            <p>
                Project <span class="current" id="currentNum">1</span> 
                of <span class="total" id="totalNum">8</span>
            </p>
        </div>
    </div>
</div>

<script>
    const projects = [
        {name: "neo-titanium-mp", image: "/assets/projects/neo-titanium-mp.png", description: "Monorepo scaffold for modern pipelines / MP utilities.", url: "https://zarir-engineer.github.io/neo-titanium-global-enery/", color: "#4A90E2"},
        {name: "aipyqtfylicious", image: "/assets/projects/aipyqtfylicious.png", description: "AI‑infused PyQt toolkit and sample apps.", url: "#", color: "#E24A4A"},
        {name: "varsity-audio-monorepo", image: "/assets/projects/varsity-audio-monorepo.png", description: "Varsity chapters → scrape, TTS, upload pipeline.", url: "https://varsity-audio-monorepo-frontend.onrender.com", color: "#50C878"},
        {name: "minimalgotronifylicious", image: "/assets/projects/minimalgotronifylicious.png", description: "Minimal, AI‑ready monorepo with docs & scripts.", url: "#", color: "#9B59B6"},
        {name: "hyperfotopixelicious", image: "/assets/projects/hyperfotopixelicious.png", description: "Imaging & VFX experiments, tools, and pipelines.", url: "#", color: "#F39C12"},
        {name: "newtabfirefoxylicious", image: "/assets/projects/newtabfirefoxylicious.jpg", description: "Custom new‑tab experiments for Firefox.", url: "https://singhaidotnish.github.io/newtabfirefoxylicious/", color: "#E67E22"},
        {name: "dm-mindmap", image: "/assets/projects/solar-system.jpg", description: "3D mindmap visualization tool", url: "#", color: "#1ABC9C"},
        {name: "TubeSidecarificity", image: "/assets/projects/tubesidecarificity.png", description: "YouTube sidecar tools: local ffmpeg, metadata, MP3.", url: "#", color: "#34495E"}
    ];
    let currentIndex=0,isAnimating=!1,autoRotate=!0,autoRotateInterval,stage=document.getElementById("stage"),prevBtn=document.getElementById("prevBtn"),nextBtn=document.getElementById("nextBtn"),autoRotateBtn=document.getElementById("autoRotateBtn"),dotNav=document.getElementById("dotNav"),currentNum=document.getElementById("currentNum"),totalNum=document.getElementById("totalNum");function init(){totalNum.textContent=projects.length,createCards(),createDots(),updateCarousel(),startAutoRotate()}function createCards(){projects.forEach(((e,t)=>{const r=document.createElement("div");r.className="card-wrapper",r.dataset.index=t;const a=document.createElement("div");a.className="project-card",a.style.background=`linear-gradient(135deg, ${e.color}20, ${e.color}40)`,a.innerHTML=`<div class="project-image"><img src="${e.image}" alt="${e.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23333%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EProject%3C/text%3E%3C/svg%3E'">${"#"!==e.url?`<a href="${e.url}" target="_blank" rel="noopener noreferrer" class="external-link"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>`:""}</div><div class="project-info"><h3 class="project-name">${e.name}</h3><p class="project-description">${e.description}</p><div class="featured-badge"><span class="badge">Featured</span></div></div>`,r.appendChild(a),stage.appendChild(r)}))}function createDots(){projects.forEach(((e,t)=>{const r=document.createElement("button");r.className="dot",r.dataset.index=t,r.setAttribute("aria-label",`Go to project ${t+1}`),r.addEventListener("click",(()=>goToSlide(t))),dotNav.appendChild(r)}))}function getCardStyle(e){const t=(e-currentIndex+projects.length)%projects.length,r=360/projects.length*t,a=450*Math.sin(r*Math.PI/180),n=450*Math.cos(r*Math.PI/180)-450;let o=1,i=1,s=0;return 0===t?(o=1.15,i=1,s=10):1===t||t===projects.length-1?(o=.8,i=.6,s=5):2===t||t===projects.length-2?(o=.6,i=.3,s=3):(o=.45,i=.15,s=1),{transform:`translateX(${a}px) translateZ(${n}px) rotateY(${-r}deg) scale(${o})`,opacity:i,zIndex:s,pointerEvents:0===t?"auto":"none"}}function updateCarousel(){document.querySelectorAll(".card-wrapper").forEach(((e,t)=>{const r=getCardStyle(t);e.style.transform=r.transform,e.style.opacity=r.opacity,e.style.zIndex=r.zIndex,e.style.pointerEvents=r.pointerEvents,(t-currentIndex+projects.length)%projects.length==0?e.classList.add("center"):e.classList.remove("center")})),document.querySelectorAll(".dot").forEach(((e,t)=>{t===currentIndex?e.classList.add("active"):e.classList.remove("active")})),currentNum.textContent=currentIndex+1}function handleNext(){isAnimating||(isAnimating=!0,currentIndex=(currentIndex+1)%projects.length,updateCarousel(),setTimeout((()=>{isAnimating=!1}),600))}function handlePrev(){isAnimating||(isAnimating=!0,currentIndex=(currentIndex-1+projects.length)%projects.length,updateCarousel(),setTimeout((()=>{isAnimating=!1}),600))}function goToSlide(e){isAnimating||e===currentIndex||(isAnimating=!0,currentIndex=e,autoRotate=!1,stopAutoRotate(),updateAutoRotateButton(),updateCarousel(),setTimeout((()=>{isAnimating=!1}),600))}function startAutoRotate(){autoRotateInterval&&clearInterval(autoRotateInterval),autoRotateInterval=setInterval(handleNext,4e3)}function stopAutoRotate(){autoRotateInterval&&(clearInterval(autoRotateInterval),autoRotateInterval=null)}function toggleAutoRotate(){autoRotate=!autoRotate,autoRotate?startAutoRotate():stopAutoRotate(),updateAutoRotateButton()}function updateAutoRotateButton(){autoRotateBtn.textContent=autoRotate?"⏸ Pause Auto-Rotate":"▶ Resume Auto-Rotate"}prevBtn.addEventListener("click",handlePrev),nextBtn.addEventListener("click",handleNext),autoRotateBtn.addEventListener("click",toggleAutoRotate),stage.addEventListener("mouseenter",(()=>{autoRotate&&stopAutoRotate()})),stage.addEventListener("mouseleave",(()=>{autoRotate&&startAutoRotate()})),document.addEventListener("keydown",(e=>{"ArrowLeft"===e.key&&handlePrev(),"ArrowRight"===e.key&&handleNext()})),init();
</script>