import React from 'react';
import { Layout } from '../components/Layout';
import HybridHeroSection from '../sections/HybridHeroSection';
import ProgramHighlights from '../sections/ProgramHighlights';
import Projects from '../sections/Projects';
import Trainers from '../sections/Trainers';
import PlacementAssistance from '../sections/PlacementAssistance';
import Technologies from '../sections/Technologies';
import Certificates from '../sections/Certificates';
import AboutUs from '../sections/AboutUs';
import WhyJoinUs from '../sections/WhyJoinUs';
import HybridTechnologyCards from '../sections/HybridTechnologyCards';

const HybridInternship: React.FC = () => {
  return (
    <Layout>
      <HybridHeroSection />
      <ProgramHighlights isOnline={false} isHybrid={true} />
      <WhyJoinUs isOnline={false} isHybrid={true} />
      <HybridTechnologyCards />
      <Projects isOnline={false} isHybrid={true} />
      <Trainers isOnline={false} isHybrid={true} />
      <PlacementAssistance isOnline={false} isHybrid={true} />
      <Certificates />
      <AboutUs />
    </Layout>
  );
};

export default HybridInternship;
