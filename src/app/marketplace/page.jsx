import React, { Suspense } from 'react';
import HeroSection from '@/src/Components/HeroSection';
import WhyChooseUs from '@/src/Components/WhyChooseUs';
import BrowsebyCategory from '@/src/Components/BrowsebyCategory';
import FeatureProducts from '@/src/Components/FeatureProducts';
import RegisterSupplier from '@/src/Components/RegisterSupplier';
const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <BrowsebyCategory />
      <FeatureProducts />
      <RegisterSupplier />
    </>
  );
};

export default Home;
