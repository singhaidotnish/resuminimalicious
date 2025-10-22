---
layout: archive
title: "Projects Gallery"
permalink: /projects/
author_profile: true
classes: wide
---

<style>
.projects-intro {
  text-align: center;
  margin-bottom: 3em;
  padding: 2em 1em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.projects-intro h1 {
  color: white;
  margin-bottom: 0.5em;
  font-size: 2.5em;
}

.projects-intro p {
  font-size: 1.2em;
  opacity: 0.95;
  max-width: 800px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2em;
  margin-top: 2em;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  font-weight: bold;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 1.5em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: #333;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1em;
  flex-grow: 1;
  font-size: 0.95em;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 1em;
}

.project-tag {
  background: #f0f0f0;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  font-size: 0.85em;
  color: #555;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 0.8em;
  margin-top: auto;
  flex-wrap: wrap;
}

.project-link {
  flex: 1;
  min-width: 120px;
  text-align: center;
  padding: 0.7em 1em;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9em;
  transition: all 0.3s ease;
  display: inline-block;
}

.project-link.primary {
  background: #667eea;
  color: white;
}

.project-link.primary:hover {
  background: #5568d3;
  color: white;
  text-decoration: none;
}

.project-link.secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.project-link.secondary:hover {
  background: #667eea;
  color: white;
  text-decoration: none;
}

.project-status {
  display: inline-block;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.8em;
}

.status-active {
  background: #d4edda;
  color: #155724;
}

.status-completed {
  background: #cce5ff;
  color: #004085;
}

.status-wip {
  background: #fff3cd;
  color: #856404;
}

.fallback-icon {
  font-size: 4em;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-intro h1 {
    font-size: 2em;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .project-link {
    min-width: auto;
  }
}
</style>

<div class="projects-intro">
  <h1>My Projects</h1>
  <p>A collection of my development work spanning AI, automation, web development, and creative tools</p>
</div>

<div class="projects-grid">
{% for project in site.data.projects %}
  <div class="project-card">
    <div class="project-image">
      {% if project.image != "" %}
        <img src="{{ project.image }}" alt="{{ project.name }}" />
      {% else %}
        <span class="fallback-icon">
          {% if project.name contains "ai" or project.name contains "AI" %}🤖
          {% elsif project.name contains "audio" or project.name contains "Tube" %}🎵
          {% elsif project.name contains "foto" or project.name contains "photo" %}📸
          {% elsif project.name contains "firefox" %}🦊
          {% elsif project.name contains "mindmap" %}🧠
          {% else %}💻{% endif %}
        </span>
      {% endif %}
    </div>
    <div class="project-content">
      {% if project.status == "active" %}
        <span class="project-status status-active">Active</span>
      {% elsif project.status == "completed" %}
        <span class="project-status status-completed">Completed</span>
      {% elsif project.status == "wip" %}
        <span class="project-status status-wip">In Progress</span>
      {% endif %}
      
      <h3 class="project-title">{{ project.name }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
      <div class="project-tags">
        {% for tag in project.tags %}
          <span class="project-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      
      <div class="project-links">
        {% if project.links.github != "" %}
          <a href="{{ project.links.github }}" class="project-link primary" target="_blank">View Code</a>
        {% endif %}
        {% if project.links.demo != "" %}
          <a href="{{ project.links.demo }}" class="project-link secondary" target="_blank">Live Demo</a>
        {% endif %}
        {% if project.links.docs != "" %}
          <a href="{{ project.links.docs }}" class="project-link secondary" target="_blank">Docs</a>
        {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>

<script>
// Add smooth hover animations
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
</script>