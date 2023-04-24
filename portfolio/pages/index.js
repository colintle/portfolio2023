import React from 'react';
import Feature from '@/components/Feature/Feature';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Footer from '@/components/Footer/Footer';
import Projects from '@/components/Projects/Projects';

function Index() {
  return (
    <div className='scroll-smooth'>
      <Feature/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Index;
