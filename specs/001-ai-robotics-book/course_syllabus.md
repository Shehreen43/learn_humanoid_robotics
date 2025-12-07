# Physical AI & Humanoid Robotics - Course Details

## Focus and Theme
**Theme**: AI Systems in the Physical World. Embodied Intelligence.
**Goal**: Bridging the gap between the digital brain and the physical body. Students apply their AI knowledge to control Humanoid Robots in simulated and real-world environments.

## Quarter Overview
The future of AI extends beyond digital spaces into the physical world. This capstone quarter introduces Physical AI—AI systems that function in reality and comprehend physical laws. Students learn to design, simulate, and deploy humanoid robots capable of natural human interactions using ROS 2, Gazebo, and NVIDIA Isaac.

---

## Module Breakdown

### Module 1: The Robotic Nervous System (ROS 2)
*   **Focus**: Middleware for robot control.
*   ROS 2 Nodes, Topics, and Services.
*   Bridging Python Agents to ROS controllers using rclpy.
*   Understanding URDF (Unified Robot Description Format) for humanoids.

### Module 2: The Digital Twin (Gazebo & Unity)
*   **Focus**: Physics simulation and environment building.
*   Simulating physics, gravity, and collisions in Gazebo.
*   High-fidelity rendering and human-robot interaction in Unity.
*   Simulating sensors: LiDAR, Depth Cameras, and IMUs.

### Module 3: The AI-Robot Brain (NVIDIA Isaac™)
*   **Focus**: Advanced perception and training.
*   NVIDIA Isaac Sim: Photorealistic simulation and synthetic data generation.
*   Isaac ROS: Hardware-accelerated VSLAM (Visual SLAM) and navigation.
*   Nav2: Path planning for bipedal humanoid movement.

### Module 4: Vision-Language-Action (VLA)
*   **Focus**: The convergence of LLMs and Robotics.
*   Voice-to-Action: Using OpenAI Whisper for voice commands.
*   Cognitive Planning: Using LLMs to translate natural language ("Clean the room") into a sequence of ROS 2 actions.
*   **Capstone Project**: The Autonomous Humanoid. A final project where a simulated robot receives a voice command, plans a path, navigates obstacles, identifies an object using computer vision, and manipulates it.

---

## Why Physical AI Matters
Humanoid robots are poised to excel in our human-centered world because they share our physical form and can be trained with abundant data from interacting in human environments. This represents a significant transition from AI models confined to digital environments to embodied intelligence that operates in physical space.

## Learning Outcomes
1.  Understand Physical AI principles and embodied intelligence
2.  Master ROS 2 (Robot Operating System) for robotic control
3.  Simulate robots with Gazebo and Unity
4.  Develop with NVIDIA Isaac AI robot platform
5.  Design humanoid robots for natural interactions
6.  Integrate GPT models for conversational robotics

---

## Weekly Breakdown

*   **Weeks 1-2: Introduction to Physical AI**
    *   Foundations of Physical AI and embodied intelligence
    *   From digital AI to robots that understand physical laws
    *   Overview of humanoid robotics landscape
    *   Sensor systems: LIDAR, cameras, IMUs, force/torque sensors

*   **Weeks 3-5: ROS 2 Fundamentals**
    *   ROS 2 architecture and core concepts
    *   Nodes, topics, services, and actions
    *   Building ROS 2 packages with Python
    *   Launch files and parameter management

*   **Weeks 6-7: Robot Simulation with Gazebo**
    *   Gazebo simulation environment setup
    *   URDF and SDF robot description formats
    *   Physics simulation and sensor simulation
    *   Introduction to Unity for robot visualization

*   **Weeks 8-10: NVIDIA Isaac Platform**
    *   NVIDIA Isaac SDK and Isaac Sim
    *   AI-powered perception and manipulation
    *   Reinforcement learning for robot control
    *   Sim-to-real transfer techniques

*   **Weeks 11-12: Humanoid Robot Development**
    *   Humanoid robot kinematics and dynamics
    *   Bipedal locomotion and balance control
    *   Manipulation and grasping with humanoid hands
    *   Natural human-robot interaction design

*   **Week 13: Conversational Robotics**
    *   Integrating GPT models for conversational AI in robots
    *   Speech recognition and natural language understanding
    *   Multi-modal interaction: speech, gesture, vision

---

## Assessments
*   ROS 2 package development project
*   Gazebo simulation implementation
*   Isaac-based perception pipeline
*   Capstone: Simulated humanoid robot with conversational AI

---

## Hardware Requirements
This course is technically demanding. It sits at the intersection of three heavy computational loads: Physics Simulation (Isaac Sim/Gazebo), Visual Perception (SLAM/Computer Vision), and Generative AI (LLMs/VLA).

### 1. The "Digital Twin" Workstation (Required per Student)
*   **GPU (The Bottleneck)**: NVIDIA RTX 4070 Ti (12GB VRAM) or higher.
    *   *Ideal*: RTX 3090 or 4090 (24GB VRAM).
*   **CPU**: Intel Core i7 (13th Gen+) or AMD Ryzen 9.
*   **RAM**: 64 GB DDR5 (32 GB is absolute minimum).
*   **OS**: Ubuntu 22.04 LTS.

### 2. The "Physical AI" Edge Kit
For deploying the nervous system.
*   **The Brain**: NVIDIA Jetson Orin Nano (8GB) or Orin NX (16GB).
*   **The Eyes**: Intel RealSense D435i or D455.
*   **The Inner Ear**: Generic USB IMU (BNO055).
*   **Voice Interface**: USB Microphone/Speaker array (e.g., ReSpeaker).

### 3. The Robot Lab (Options)
*   **Option A (Proxy)**: Unitree Go2 Edu (~$1,800 - $3,000).
*   **Option B (Miniature)**: Unitree G1 (~$16k) or Robotis OP3 (~$12k). TonyPi Pro (~$600) for budget.
*   **Option C (Premium)**: Unitree G1 Humanoid.

### 4. Summary of Architecture
*   **Sim Rig**: PC with RTX 4080 + Ubuntu 22.04.
*   **Edge Brain**: Jetson Orin Nano.
*   **Sensors**: RealSense Camera + Lidar.
*   **Actuator**: Unitree Go2 or G1.

### Option 2 High OpEx: The "Ether" Lab (Cloud-Native)
*   **Cloud Workstations**: AWS g5.2xlarge or g6e.xlarge.
*   **Cost**: ~$205 per quarter.
*   **Local Bridge**: Edge AI Kits (~$700) + Robot.

### The Economy Jetson Student Kit
*   **The Brain**: NVIDIA Jetson Orin Nano Super Dev Kit (8GB) - $249.
*   **The Eyes**: Intel RealSense D435i - $349.
*   **The Ears**: ReSpeaker USB Mic Array v2.0 - $69.
*   **Misc**: SD Card + Jumper Wires - $30.
*   **Total**: ~$700 per kit.
