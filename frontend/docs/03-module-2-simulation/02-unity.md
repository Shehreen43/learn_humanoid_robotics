---
id: unity-visualization
title: High-Fidelity Visualization with Unity
sidebar_label: Unity Visualization
---

# High-Fidelity Visualization with Unity

While Gazebo is great for physics, its graphics are functional, not beautiful. **Unity** is a game engine capable of photorealistic rendering.

## Why Unity for Robotics?
1.  **Visual Realism**: Ray tracing, advanced lighting, and textures.
2.  **Human-Robot Interaction (HRI)**: If you want to test how a human reacts to a robot, you need a convincing environment (VR/AR).
3.  **Synthetic Data**: Generating photorealistic images to train Computer Vision models (e.g., teaching a robot to recognize a shiny red Apple vs. a plastic one).

## Unity Robotics Hub
Unity provides the **ROS-TCP-Connector**.
*   **ROS Side**: A node (`ros_tcp_endpoint`) runs in ROS 2.
*   **Unity Side**: A C# script connects to that endpoint via TCP/IP.

This allows Unity to:
*   Subscribe to joint states (visualize the robot moving).
*   Publish sensor data (simulate a camera).

## UrdfImporter
Manually building your robot in Unity is painful. The **UrdfImporter** package allows you to drag-and-drop your URDF file into Unity. It automatically creates the GameObjects, hierarchies, and joints.

## Setting up a Scene

1.  **Import URDF**: Use UrdfImporter to bring in your humanoid.
2.  **Add Lighting**: Directional Light (Sun) and Reflection Probes.
3.  **Add Physics (Optional)**: Unity has PhysX. You *can* simulate physics here, but PhysX is less accurate for robotics joints than Gazebo's Dart engine. Often, we execute physics in Gazebo (or Isaac Sim) and just **visualize** the result in Unity.

## Simulating Cameras
1.  Add a **Camera** GameObject to the robot's head.
2.  Add a **CameraPublisher** script.
3.  Set the topic name (`/unity_camera/image_raw`).
4.  Set the frequency (e.g., 30 Hz).

Now, Unity renders the scene and sends the jpg/raw bytes over TCP to ROS. Your Python node thinks it's talking to a real camera!

## VR Teleoperation
One advanced use case is **VR Teleop**. You can wear an Oculus Quest, map your hand movements to the robot's end-effectors, and control the robot remotely. This is often used for collecting "Demonstration Data" to train AI models (Imitation Learning).
