import React from 'react';
import styles from './ModulesSection.module.css';
import ModuleCard from '../ModuleCard/ModuleCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Simplified icons for now, can be replaced with better SVGs
const RosIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
);

const SimIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </svg>
);

const BrainIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
);

const RobotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
);

export default function ModulesSection(): JSX.Element {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="modules-section" className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.sectionHeader} ${isVisible ? styles.isVisible : styles.animateOnScroll}`}>
                    <h2 className={styles.sectionTitle}>Course Curriculum</h2>
                    <p className={styles.sectionSubtitle}>
                        A comprehensive journey from digital fundamentals to physical deployment.
                        Master each layer of the modern robotics stack.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={`${isVisible ? styles.isVisible : styles.animateOnScroll} ${styles.stagger1}`}>
                        <ModuleCard
                            title="ROS 2 Fundamentals"
                            description="Master the Robot Operating System. Learn nodes, topics, services, and actions to build the nervous system of your robot."
                            moduleNumber="01"
                            icon={<RosIcon />}
                            link="/docs/module-1-ros2/ros2-fundamentals"
                        />
                    </div>
                    <div className={`${isVisible ? styles.isVisible : styles.animateOnScroll} ${styles.stagger2}`}>
                        <ModuleCard
                            title="Physics Simulation"
                            description="Create physically accurate digital twins using Gazebo and Unity. Simulate gravity, friction, and robot dynamics safely."
                            moduleNumber="02"
                            icon={<SimIcon />}
                            link="/docs/module-2-simulation/gazebo-simulation"
                        />
                    </div>
                    <div className={`${isVisible ? styles.isVisible : styles.animateOnScroll} ${styles.stagger3}`}>
                        <ModuleCard
                            title="Perception & SLAM"
                            description="Implement advanced perception using NVIDIA Isaac. Teach your robot to map its environment and localize itself."
                            moduleNumber="03"
                            icon={<BrainIcon />}
                            link="/docs/module-3-isaac/isaac-sim"
                        />
                    </div>
                    <div className={`${isVisible ? styles.isVisible : styles.animateOnScroll} ${styles.stagger4}`}>
                        <ModuleCard
                            title="VLA Models"
                            description="The cutting edge: Vision-Language-Action models. Fuse LLMs with robotic control to enable natural language commands."
                            moduleNumber="04"
                            icon={<RobotIcon />}
                            link="/docs/module-4-vla/vla-intro"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
