import React from 'react';
import HeroSection from '../../components/HeroSection';
import LogoBar from '../../components/LogoBar';
import ProjectGrid from '../../components/ProjectGrid';
import Testimonials from '../../components/Testimonials';
import CTASection from '../../components/CTASection';

const Home = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <HeroSection />
      <LogoBar />
      <ProjectGrid />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
