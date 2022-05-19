import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout/index';
import BuyAndedTradeSection from '../components/sections/BuyAndedTradeSection';
import CreditCardSection from '../components/sections/CreditCardSection';
import CryptocurrencySection from '../components/sections/CryptocurrencySection';
import HeroSection from '../components/sections/HeroSection';
import PartnerSection from '../components/sections/PartnerSection';
import TradingToolsSection from '../components/sections/TradingToolsSection';
import SecuritySection from '../components/sections/SecuritySection';
import StepSection from '../components/sections/StepSection';
import FaqSection from '../components/sections/FaqSection';
import BacktoTop from '../components/sections/BacktoTop';
import FooterSection from '../components/sections/FooterSection';

export default function index() {
  return (
    <Layout>
      <HeroSection />
      <CryptocurrencySection />
      <BuyAndedTradeSection />
      <PartnerSection />
      <CreditCardSection />
      <TradingToolsSection />
      <SecuritySection />
      <StepSection />
      <FaqSection />
      <BacktoTop />
      <FooterSection />
    </Layout>
  );
}
