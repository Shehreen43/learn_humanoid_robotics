# Implementation Plan: Visual Enhancements & Polish

## Goal
Enhance the existing text-heavy course content with 10+ images, 5+ Mermaid diagrams, and Docusaurus-specific formatting (Admonitions) to meet the "rich structure" requirement.

## Proposed Changes

### 1. Image Generation (using `generate_image` tool)
Target directory: `frontend/static/img/course`
- [NEW] `physical-ai-header.png`: Futuristic humanoid robot hand reaching out.
- [NEW] `ros2-network.png`: Abstract visualization of nodes connecting.
- [NEW] `gazebo-world.png`: 3D simulation environment.
- [NEW] `isaac-sim-realistic.png`: Photorealistic robot in NVIDIA Isaac.
- [NEW] `vla-pipeline.png`: Visual concept of Vision-Language-Action.

### 2. Mermaid Diagrams (using `mermaid` code blocks)
- **Introduction**:
    - `01-physical-ai.md`: Venn diagram of AI vs Robotics vs Physical AI.
- **Module 1 (ROS 2)**:
    - `ros2-fundamentals.md`: Pub/Sub Graph.
    - `urdf-modeling.md`: Link-Joint Tree structure.
- **Module 3 (Isaac)**:
    - `nav2-navigation.md`: A flowchart of the Navigation Stack (Map -> Planner -> Controller).
- **Module 4 (VLA)**:
    - `vla-intro.md`: VLA process flow (Voice -> Text -> Plan -> Action).

### 3. File Edits
- **Add Images**: Insert `![Alt](@site/static/img/course/...)` into markdown files.
- **Add Admonitions**: Usage of `:::note`, `:::tip`, `:::warning` to highlight key concepts.
- **Structure**: Add "Prerequisites" and "Learning Objectives" sections if missing.

## Verification Plan
1.  **Build Check**: Run `npm run build` to ensure no broken image links or mermaid syntax errors.
2.  **Visual Check**: Use `npm run serve` (already running) and check the browser output or rely on build success.
