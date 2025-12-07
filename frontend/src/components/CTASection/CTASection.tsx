import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import styles from './CTASection.module.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function CTASection(): JSX.Element {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className={styles.section} ref={ref}>
            <div className={`${styles.container} ${isVisible ? styles.isVisible : styles.animateOnScroll}`}>
                <h2 className={styles.title}>Ready to Build the Future?</h2>
                <p className={styles.subtitle}>
                    Start your journey into Physical AI and humanoid robotics today.
                    From first node to real-world deployment.
                </p>

                <Link
                    className={styles.buttonPrimary}
                    to="/docs/intro/physical-ai-intro">
                    Start Learning Now
                </Link>

                <p className={styles.secondaryText}>
                    Free and open-source course materials (MIT License)
                </p>
            </div>
        </section>
    );
}
