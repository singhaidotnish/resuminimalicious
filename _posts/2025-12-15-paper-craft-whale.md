---
title: "From Pixels to Paper: How I Fused 3D & Code to Fold a Whale"
excerpt: "Forgetting a tutorial, I used Blender and Python to bridge the digital and physical. The goal: craft a blue whale from a single sheet by automating the hard parts."
date: 2025-12-15
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories: [making, focus, adhd]
tags: [papercraft, blender, python, scripting, 3d, prototyping, adhd]
toc: true
toc_label: "Jump to the Fold"
toc_sticky: true
visible: true
permalink: /paper-whale-blender-script/
header:
  teaser: /assets/images/paper-whale-teaser.jpg # Optional image of your folded whale or a 3D model
---

**TL;DR:** I was stuck in tutorial hell trying to make a paper whale. So I switched gears: **1)** Modeled it cleanly in Blender, **2)** Wrote a Python script to mark fold lines automatically, and **3)** Learned that **automating precision** sets your hands free for the satisfying, tactile work of folding. The process became a perfect ADHD project: short digital sprints followed by deep, physical focus.

---

## 🎯 The Problem: Tutorials vs. Making
Most paper craft tutorials start with a finished 2D template. You print, cut, and hope. For me, this killed the joy and understanding. **I didn't want to just assemble; I wanted to *design* the transition from 3D to 2D myself.**

My ADHD brain needed:
1.  A clear, **visual 3D goal** (the whale model).
2.  A **systematic rule** to follow (the script's logic).
3.  A **tactile, rewarding payoff** (the physical folded object).

## Step 1: Modeling the Whale in Blender – Keeping It Simple
The key to a good paper model is **low polycount and manifold geometry**. Every face will become a flap.

*   **Start Simple:** I began with a cube, subdivided and sculpted roughly into a whale shape.
*   **The Critical Step – Remeshing:** I used Blender's **Voxel Remesh** modifier to create a clean, uniform quad topology. This is non-negotiable—irregular faces create folding nightmares.
*   **Decimate (Carefully):** Reduced the polycount to the minimum needed to keep the form. Around 200-300 faces is a sweet spot for an A4 sheet.
*   **Ensure Manifold:** Used **Mesh > Clean Up > Make Manifold** to ensure every edge is shared by exactly two faces. No holes, no internal geometry.

> **💡 ADHD Focus Tip:** I used the **Sculpt Mode** for the creative, free-form part (fun!), then switched to **Edit Mode** for the technical cleanup (structured!). This context switching kept me engaged.

## Step 2: The "A-Ha" Script – From 3D Faces to 2D Flaps
This is the core. The script doesn't "unfold" the model (Blender has add-ons for that). Instead, it **prepares the 3D model for a clean export** by marking seams and adding envelope flaps automatically.

I created a Blender text block and ran this script:

```python
import bpy
import bmesh

# Get the active object (your whale)
obj = bpy.context.active_object
mesh = obj.data

# Enter Edit Mode and get a bmesh
bpy.ops.object.mode_set(mode='EDIT')
bm = bmesh.from_edit_mesh(mesh)

# 1. MARK ALL EDGES AS SEAMS (for a clean unwrap later)
for edge in bm.edges:
    edge.seam = True
print(f"Marked {len(bm.edges)} edges as seams.")

# 2. CREATE FLAPS (Extrude and scale faces inward)
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value":(0, 0, 0)}) # Dummy extrude
bpy.ops.transform.resize(value=(0.8, 0.8, 0.8)) # Scale new faces to 80%
print("Created inner flaps for gluing.")

# 3. SELECT EDGES FOR VALLEY FOLDS (Optional: select sharp edges)
for edge in bm.edges:
    edge.select = (edge.calc_face_angle() > 30) # Select edges with angle > 30 degrees

# Update and return to Object Mode
bmesh.update_edit_mesh(mesh)
bpy.ops.object.mode_set(mode='OBJECT')
print("Script finished. Ready for UV unwrapping.")