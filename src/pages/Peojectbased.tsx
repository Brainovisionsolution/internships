
import Hero from '../sections/project-based/Hero'
import Programs from '../sections/project-based/Programs'
import Benefits from '../sections/project-based/Benefits'
import Tracks from '../sections/project-based/Tracks';
import FAQ from '../sections/project-based/FAQ';
import RegistrationForm from '../sections/project-based/RegistrationForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Projectbased() {
  return (
    <div className="min-h-screen">
       <Header/>
   <Hero/>
      <Programs/>
      <Benefits />
      <Tracks />
      
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
}


