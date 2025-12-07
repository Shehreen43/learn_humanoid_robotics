import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HeroSection(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToModules = (e: React.MouseEvent) => {
        e.preventDefault();
        const modulesSection = document.getElementById('modules-section');
        if (modulesSection) {
            modulesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={`${styles.title} ${mounted ? styles.animateFadeIn : ''}`}>
                    Master <span className={styles.titleHighlight}>AI Robotics</span> &<br />
                    Embodied Intelligence
                </h1>

                <p className={`${styles.subtitle} ${mounted ? styles.animateFadeIn : ''} ${styles.delay100}`}>
                    Build, simulate, and deploy intelligent humanoid robots using ROS 2, NVIDIA Isaac Sim, and foundational Vision-Language-Action models.
                </p>

                <div className={`${styles.buttonGroup} ${mounted ? styles.animateFadeIn : ''} ${styles.delay200}`}>
                    <Link
                        className={styles.primaryButton}
                        to="/docs/intro/physical-ai-intro">
                        Start Learning
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <a
                        href="#modules-section"
                        className={styles.secondaryButton}
                        onClick={scrollToModules}>
                        Explore Modules
                    </a>
                </div>
            </div>
        </section>
    );
}
