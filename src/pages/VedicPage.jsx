import React from 'react';
//import Header from '../components/Header';
import VedicHero from '../components/VedicHero';
import AbacusOverview from '../components/AbacusOverview';
//import Footer from '../components/Footer';
import HomeTestimonials from '../components/hometestimonial';
import Course from '../components/home-course';
import FAQ from '../components/FranchiseFAQ';

export const VedicPage = () => {
    return (
      <div>
        <VedicHero />
        <AbacusOverview />
        <FAQ/>
        <HomeTestimonials />
        <Course />
      </div>
    );
  };

  export default VedicPage;