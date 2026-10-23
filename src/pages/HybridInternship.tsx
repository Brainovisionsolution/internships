import React from 'react';
import { Layout } from '../components/Layout';
import HybridHeroSection from '../sections/HybridHeroSection';
import HybridProgramHighlights from '../sections/HybridProgramHighlights';
import HybridInternshipFlow from '../sections/HybridInternshipFlow';
import HybridTechnologyCards from '../sections/HybridTechnologyCards';
import HybridWhyJoinUs from '../sections/HybridWhyJoinUs';
import HybridBatchDates from '../sections/HybridBatchDates';
import HybridBatchTimings from '../sections/HybridBatchTimings';
import HybridCurriculum from '../sections/HybridCurriculum';
import HybridProjects from '../sections/HybridProjects';
import HybridTrainers from '../sections/HybridTrainers';
import RealTimeProjects from '../sections/RealTimeProjects';
import Certificates from '../sections/Certificates';
import AboutUs from '../sections/AboutUs';

const HybridInternship: React.FC = () => {
  return (
    <Layout>
      <HybridHeroSection />
      <HybridProgramHighlights />
      <HybridInternshipFlow />
      <AboutUs />
      <HybridTechnologyCards />
      <HybridWhyJoinUs />
      <HybridBatchDates />
      <HybridBatchTimings />
      <HybridCurriculum />
      <HybridProjects />
      <RealTimeProjects />
      <Certificates />
      <HybridTrainers />
    </Layout>
  );
};

export default HybridInternship;
