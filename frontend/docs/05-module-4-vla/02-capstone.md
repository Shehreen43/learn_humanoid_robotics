---
id: capstone-project
title: "Capstone: The Autonomous Humanoid"
sidebar_label: Capstone Project
---

# Capstone Project: The Autonomous Humanoid

## The Mission
Your final goal is to demonstrate a fully integrated cycle of **See - Think - Act**.

**Scenario**: The robot is in a simulated home environment.
**Command**: You speak to the robot: "I left my red keys on the table. Please bring them to me."

## System Architecture

:::warning Hardware Safety
Real humanoid robots are heavy and powerful. Always have an **E-Stop (Emergency Stop)** button within reach when running code on physical hardware.
:::

### 1. Perception (The Eyes)
*   Camera feed enters **Isaac ROS**.
*   **YOLO / DETR** detects objects: "table", "red keys", "sofa".
*   **Depth Camera** determines the 3D position (x, y, z) of the keys relative to the robot.

### 2. Localization (The Inner Ear)
*   **Nav2** tracks the robot's location on the map.
*   It knows where "I" (the user) am (e.g., at the start position).

### 3. Cognition (The Brain)
*   **Whisper** Transcribes audio.
*   **LLM** parses:
    *   Target Object: "keys" (Color: red)
    *   Target Location: "table"
    *   Goal: "bring to user"
*   **Planner** generates steps:
    1.  `navigate("table")`
    2.  `visual_servoing("red keys")`
    3.  `grasp()`
    4.  `navigate("user_location")`
    5.  `release()`

### 4. Action (The Body)
*   **ROS 2 Control** executes the movement.
*   **Walking Controller**: Maintains balance while moving.
*   **Arm Controller**: Inverse Kinematics (IK) to move the hand to the keys.

## Evaluation Criteria

1.  **Robustness**: Does it work 5 times in a row? Or does it fall over?
2.  **Generalization**: If I move the table slightly, does it still work? (It should, because it uses vision, not hardcoded coordinates).
3.  **Latency**: How long strictly between command and first movement?

## Submission
You will submit:
1.  **Video**: A screen recording of the simulation / real robot performing the task.
2.  **Code**: Your ROS 2 pkg link.
3.  **Report**: A short breakdown of challenges (e.g., "The IK solver kept getting stuck," or " The LLM thought the red apple was the red keys").

## Congratulations!
By completing this capstone, you have built a system that touches every layer of the modern robotics stack: Hardware drivers, OS, Middleware, Physics Simulation, Computer Vision, and Generative AI. You are now a **Physical AI Engineer**.
