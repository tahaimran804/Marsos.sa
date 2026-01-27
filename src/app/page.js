import React from 'react';
import MainNavbar from '@/src/Components/MainNavbar';
import LandingLayoutHeroSection from '@/src/Components/LandingLayoutHeroSection';
import Complete_Ecosystem from '@/src/Components/Complete_Ecosystem';
import Business_Management from '@/src/Components/Business_Management';
import Workflow from '@/src/Components/Workflow';
import Industry_Specific from '@/src/Components/Industry_Specific';
import RequestDemo from '@/src/Components/RequestDemo';

const page = () => {
  return (
    <>
      <MainNavbar />
      <LandingLayoutHeroSection />
      <Complete_Ecosystem />
      <Business_Management />
      <Workflow />
      <Industry_Specific />
      <RequestDemo />
    </>
  );
};

export default page;
