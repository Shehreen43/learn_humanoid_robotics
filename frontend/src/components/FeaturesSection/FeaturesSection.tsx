import React from 'react';
import styles from './FeaturesSection.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
    {
        title: 'Hands-On Learning',
        description: 'Stop watching, start building. Every module includes code-first projects you can run on your machine.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        title: 'Industry Standards',
        description: 'Learn the tools used by Boston Dynamics, Tesla, and Figure AI: ROS 2, Isaac Sim, and PyTorch.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: 'Digital Twins',
        description: 'Master the art of simulation. Test your code in high-fidelity physics environments before hardware deployment.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        title: 'Open Source',
        description: 'Join a community of physical AI enthusiasts. All code is open-source and MIT licensed.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
];

export default function FeaturesSection(): JSX.Element {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <h2 className={`${styles.title} ${isVisible ? styles.isVisible : styles.animateOnScroll}`}>
                    Why This Course?
                </h2>

                <div className={styles.grid}>
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`${styles.feature} ${isVisible ? styles.isVisible : styles.animateOnScroll} ${styles[`delay${(idx + 1) * 100}`]}`}
                        >
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
