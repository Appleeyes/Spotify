// LandingPage.jsx
import React from 'react';
import { LandingPageHeader } from '../components/LandingPageHeader';
import { LandingPageHero } from '../components/LandingPageHero';
import { LandingPagePowerSection } from '../components/LandingPagePowerSection';
import { LandingPagePremiumSection } from '../components/LandingPagePremiumSection';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div>
      <LandingPageHeader/>
      <LandingPageHero/>
      <LandingPagePowerSection/>
      <LandingPagePremiumSection/>
      <Footer/>
    </div>
  );
}
