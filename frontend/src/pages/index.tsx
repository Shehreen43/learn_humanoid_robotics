import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import ModulesSection from '../components/ModulesSection/ModulesSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import CTASection from '../components/CTASection/CTASection';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Master AI Robotics & Humanoid Intelligence. Build, simulate, and deploy intelligent humanoid robots using ROS 2, NVIDIA Isaac Sim, and foundational Vision-Language-Action models.">
      <main className={styles.mainContainer}>
        <HeroSection />
        <ModulesSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </Layout>
  );
}
