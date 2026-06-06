import React from 'react';
import { Layout } from '../components/Layout';
import InternshipFlow from '../sections/InternshipFlow';
import HeroSection from '../sections/HeroSection';
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
import TechnologyCards from '../sections/TechnologyCards';
import RealTimeProjects from '../sections/RealTimeProjects';

const HybridInternship: React.FC = () => {
  return (
    <Layout>
      <HeroSection isHybrid={true} />
      <ProgramHighlights isOnline={false} isHybrid={true} />
      <InternshipFlow />
      <AboutUs />
      <TechnologyCards isOnline={false} isHybrid={true} />
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
