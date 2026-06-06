import React from 'react';
import { Layout } from '../components/Layout';
import HeroSection from '../sections/selfplaced/Herosection';
import ProgramHighlights from '../sections/selfplaced/ProgramHighlights';
import Projects from '../sections/Projects';
import Trainers from '../sections/Trainers';
import PlacementAssistance from '../sections/PlacementAssistance';
import Technologies from '../sections/Technologies';
import Certificates from '../sections/Certificates';
import AboutUs from '../sections/AboutUs';
import WhyJoinUs from '../sections/selfplaced/WhyJoinUs';
import HybridTechnologyCards from '../sections/SelplacedTechnologyCards';

const SelfplacedInternship: React.FC = () => {
  return (
    <Layout>
       <HeroSection/>
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

export default SelfplacedInternship;
