import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
    title: string;
    description: string;
    moduleNumber: string;
    icon: ReactNode;
    link: string;
}

export default function ModuleCard({ title, description, moduleNumber, icon, link }: ModuleCardProps): JSX.Element {
    return (
        <Link to={link} className={styles.card}>
            <span className={styles.moduleNumber}>{moduleNumber}</span>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.arrow}>
                Start Module
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </Link>
    );
}
