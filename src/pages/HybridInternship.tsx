import React from 'react';
import { Layout } from '../components/Layout';
import InternshipFlow from '../sections/InternshipFlow';
import HybridHeroSection from '../sections/HybridHeroSection';
import ProgramHighlights from '../sections/ProgramHighlights';
import AboutAI from '../sections/AboutAI';
import BatchDates from '../sections/BatchDates';
import BatchTimings from '../sections/BatchTimings';
import Curriculum from '../sections/Curriculum';
import Projects from '../sections/Projects';
import Trainers from '../sections/Trainers';
import Certificates from '../sections/Certificates';
import AboutUs from '../sections/AboutUs';
import WhyJoinUs from '../sections/WhyJoinUs';
import HybridTechnologyCards from '../sections/HybridTechnologyCards';
import RealTimeProjects from '../sections/RealTimeProjects';

const HybridInternship: React.FC = () => {
  return (
    <Layout>
      <HybridHeroSection />
      <ProgramHighlights isOnline={false} isHybrid={true} />
      <InternshipFlow />
      <AboutUs />
      <HybridTechnologyCards />
      <WhyJoinUs isOnline={false} isHybrid={true} />
      <AboutAI isHybrid={true} />
      <BatchDates isOnline={false} />
      <BatchTimings isOnline={false} />
      <Curriculum />
      <Projects isOnline={false} />
      <RealTimeProjects />
      <Certificates />
      <Trainers isOnline={false} />
    </Layout>
  );
};

export default HybridInternship;
