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
//import PlacementAssistance from '../sections/PlacementAssistance';
//import Facilities from '../sections/Facilities';
//import Registration from '../sections/Registration';
//import Technologies from '../sections/Technologies';
import Certificates from '../sections/Certificates';
import AboutUs from '../sections/AboutUs';
import WhyJoinUs from '../sections/WhyJoinUs';
import TechnologyCards from '../sections/TechnologyCards';
import RealTimeProjects from '../sections/RealTimeProjects';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ProgramHighlights isOnline={false} />
      <InternshipFlow />
         <AboutUs />
           <TechnologyCards isOnline={false} />
      <WhyJoinUs isOnline={false} />
      <AboutAI />
    
      <BatchDates isOnline={false} />
      <BatchTimings isOnline={false} />
      <Curriculum />
      <Projects />
      <RealTimeProjects />
      <Certificates/>
      <Trainers isOnline={false} />
     
   
      
    </Layout>
  );
};

export default HomePage;
