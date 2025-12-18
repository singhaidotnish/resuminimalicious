---
layout: splash
permalink: /projects/
---

<!-- Link to external CSS -->
<link rel="stylesheet" href="/assets/css/projects.css">
<script src="/assets/js/projects.bundle.js" defer></script>

<div class="carousel-wrapper">
    <div class="carousel-container">
        <!-- Header -->
        <div class="carousel-header">
            <h1>Projects Gallery</h1>
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

