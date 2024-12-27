import React from 'react';
import { Link } from "react-router-dom";
//import Header from '../components/Header';
//import Footer from '../components/Footer';
import Insighthero from '../components/InsightHero';
import Gallery from '../components/InsightGallery';
import Achievement from '../components/InsightAchievement';
export const Insight = () => {
    return (
      <div>
        <Insighthero />
        <Gallery/>
        <Achievement />
      </div>
    );
  };
  
  export default Insight;