import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import AwardsSection from './components/AwardsSection';

import Footer from './components/Footer';
import './styles/globals.css' 
import { ThemeProvider } from './context/ThemeContext';

function MyApp() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection/>
          <AwardsSection />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;