---
id: ros2-python-nodes
title: Building ROS 2 Nodes with Python
sidebar_label: Python Nodes & rclpy
---

# Building ROS 2 Nodes with Python (`rclpy`)

Now that we understand the theory, let's write code. We will use `rclpy` (ROS Client Library for Python) to build a simple control loop.

## The Workspace

In ROS 2, you work within a **Workspace** (usually named `ros2_ws`). This is where you build your packages.

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws/src
```

## Creating a Package

A **Package** is a container for your code. It makes it easy to share and build.

```bash
ros2 pkg create --build-type ament_python my_robot_controller
```

This creates a directory structure:
*   `package.xml`: Defines dependencies.
*   `setup.py`: Build instructions.
*   `my_robot_controller/`: Where your Python scripts live.

## Writing a Simple Node

Let's create a node that simulates a heartbeat for our robot. Create `my_robot_controller/heartbeat_node.py`.

```python
#!/usr/bin/env python3
import rclpy
from rclpy.node import Node

class HeartbeatNode(Node):
    def __init__(self):
        super().__init__("heartbeat_node")
        self.get_logger().info("Heartbeat Node has started.")
        
        # Create a timer that fires every 1.0 second
        self.create_timer(1.0, self.timer_callback)
        self.counter = 0

    def timer_callback(self):
        self.get_logger().info(f"Lub-Dub: {self.counter}")
        self.counter += 1

def main(args=None):
    rclpy.init(args=args)
    node = HeartbeatNode()
    
    try:
        rclpy.spin(node) # Keeps the node alive
    except KeyboardInterrupt:
        pass
        
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Breaking Down the Code

1.  **Inheritance**: `class HeartbeatNode(Node)` imports all standard ROS functionality.
2.  **`__init__`**: We name the node "heartbeat_node". This name must be unique in the graph.
3.  **Logging**: `self.get_logger().info(...)` is preferred over `print()`. It adds timestamps and formatting.
4.  **Timers**: `create_timer(1.0, callback)` allows us to run code periodically without blocking execution loops (non-blocking).
5.  **Spinning**: `rclpy.spin(node)` pauses the program here and waits for callbacks (timers, incoming messages) to trigger. It yields control to ROS.

## Registering the Executable

For ROS to find your node (so you can run `ros2 run ...`), you must edit `setup.py`.

```python
entry_points={
    'console_scripts': [
        'heartbeat = my_robot_controller.heartbeat_node:main',
    ],
},
```

Now, from the workspace root:

```bash
cd ~/ros2_ws
colcon build --symlink-install
source install/setup.bash
ros2 run my_robot_controller heartbeat
```

:::tip Why --symlink-install?
Using `--symlink-install` allows you to change your Python scripts without rebuilding the package every time. It links the file in `install/` directly to your `src/` file.
:::

## Publishers and Subscribers

Let's make it interactive. We'll create a publisher that sends "Motor Commands" and a subscriber that listens.

### The Publisher

```python
from std_msgs.msg import String

# Inside your class, in __init__:
self.cmd_pub = self.create_publisher(String, "motor_commands", 10)

# In your timer callback:
msg = String()
msg.data = f"Move forward: {self.counter}"
self.cmd_pub.publish(msg)
```

### The Subscriber

```python
# In a new node class:
self.create_subscription(String, "motor_commands", self.cmd_callback, 10)

def cmd_callback(self, msg):
    self.get_logger().info(f"Received command: {msg.data}")
```

### QoS Profiles (Quality of Service)
Notice the `10` argument? That's the **Queue Size**. If the subscriber is slow, ROS keeps 10 messages in buffer.
ROS 2 allows fine-tuning QoS:
*   **Reliability**: `Reliable` (TCP-like, guarantees delivery) vs `Best Effort` (UDP-like, drops packets if fast).
*   **Durability**: `Transient Local` (new subscribers get the last message) vs `Volatile`.

For high-speed sensor data (like LiDAR), we usually use **Best Effort**. For critical commands ("Stop!"), we use **Reliable**.
