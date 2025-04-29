import React from 'react';
import { Layout } from '../components/Layout';
import OnlineHeroSection from '../sections/OnlineHeroSection';
import ProgramHighlights from '../sections/ProgramHighlights';
import TechnologyOverview from '../sections/TechnologyOverview';
import BatchDates from '../sections/BatchDates';
import BatchTimings from '../sections/BatchTimings';
import Projects from '../sections/Projects';
import Trainers from '../sections/Trainers';
import PlacementAssistance from '../sections/PlacementAssistance';
import Technologies from '../sections/Technologies';
import Certificates from '../sections/Certificates';
import AboutUs from '../sections/AboutUs';
import OnlineRegistration from '../sections/OnlineRegistration';
import WhyJoinUs from '../sections/WhyJoinUs';
import TechnologyCards from '../sections/TechnologyCards';


const OnlineInternship: React.FC = () => {
  return (
    <Layout>
      <OnlineHeroSection />
      <ProgramHighlights isOnline={true} />
      <WhyJoinUs isOnline={true} />
      <TechnologyCards isOnline={true} />
      <TechnologyOverview />
      <BatchDates isOnline={true} />
      <BatchTimings isOnline={true} />
      <Projects isOnline={true} />
      <Trainers isOnline={true} />
      <PlacementAssistance isOnline={true} />
      <Technologies isOnline={true} />
      <Certificates />
      <AboutUs />
      <OnlineRegistration />
    </Layout>
  );
};

export default OnlineInternship;
