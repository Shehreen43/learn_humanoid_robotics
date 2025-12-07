# Specification: Physical AI & Humanoid Robotics Course Content

## Goal
Add comprehensive course content (3000-7000 words) to the Docusaurus site in `frontend/docs`.

## Content Structure
The course will be divided into modules as per the syllabus.

### Hierarchy
- **Introduction**
  - `intro-physical-ai.md`: What is Physical AI? Embodied Intelligence.
- **Module 1: The Robotic Nervous System (ROS 2)**
  - `ros2-fundamentals.md`: Nodes, Topics, Services.
  - `ros2-python.md`: rclpy, Package structure.
  - `urdf-modeling.md`: URDF for Humanoids.
- **Module 2: The Digital Twin (Gazebo & Unity)**
  - `gazebo-simulation.md`: Physics, Gravity, Collisions.
  - `unity-visualization.md`: High-fidelity rendering.
  - `sensor-simulation.md`: LiDAR, Cameras, IMUs.
- **Module 3: The AI-Robot Brain (NVIDIA Isaac)**
  - `isaac-sim.md`: Synthetic data generation.
  - `isaac-ros-vslam.md`: Visual SLAM and Navigation (Nav2).
- **Module 4: Vision-Language-Action (VLA)**
  - `vla-voice-action.md`: Whisper, LLMs for control.
  - `capstone-project.md`: The Autonomous Humanoid.

## Sidebar Requirements
- Implement a smooth, collapsible sidebar in `sidebars.ts`.
- Group content by Modules.
- Ensure "Previous" and "Next" navigation works well.

## Technical Details
- Format: Markdown / MDX.
- Images: Placeholders or diagrams (Mermaid) where appropriate.
- Code Snippets: Python, XML (URDF), Bash.

## Word Count Target
- Total: ~3000-7000 words.
- Approx ~500-1000 words per key topic.
