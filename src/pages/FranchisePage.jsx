import React from "react";
import Franchisehero from "../components/franchiseHero";
import FranchiseInvestment from "../components/franchiseInvestment";
import FranchiseProcess from "../components/franchiseapplication";
import FranchiseOurstory from "../components/FranchiseOurstory";
import FranchiseSuccess from "../components/FranchiseSuccess";
import FranchiseSupport from "../components/FranchiseSupport";
import FAQ from "../components/FranchiseFAQ";
import QuestionSection from "../components/Question";

const FranchisePage = () => {
  return (
    <div>
      <Franchisehero />
      <FranchiseOurstory />
      <FranchiseInvestment />
      <FranchiseSupport />
      <FranchiseProcess />
      <div id="faq"> {/* Add the ID here */}
        <FAQ />
      </div>
      <FranchiseSuccess />
      <QuestionSection />
    </div>
  );
};

export default FranchisePage;
