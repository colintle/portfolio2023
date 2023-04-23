import React from 'react';
import Feature from '@/components/Feature/Feature';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Footer from '@/components/Footer/Footer';
import Projects from '@/components/Projects/Projects';
import withFadeInOnScroll from '@/hoc/withFadeInOnScroll';

const FeatureWithFadeIn = withFadeInOnScroll(Feature);
const AboutWithFadeIn = withFadeInOnScroll(About);
const ExperienceWithFadeIn = withFadeInOnScroll(Experience);
const ProjectsWithFadeIn = withFadeInOnScroll(Projects);
const FooterWithFadeIn = withFadeInOnScroll(Footer);

function Index() {
  return (
    <div>
      <FeatureWithFadeIn />
      <AboutWithFadeIn />
      <ExperienceWithFadeIn />
      <ProjectsWithFadeIn />
      <FooterWithFadeIn />
    </div>
  );
}

export default Index;
