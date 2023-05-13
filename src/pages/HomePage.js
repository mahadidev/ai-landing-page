import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import AboutOne from "../component/about/AboutOne";
import AboutTwo from "../component/about/AboutTwo";

import BannerOne from "../component/banner/BannerOne";
import BlogOne from "../component/blog/BlogOne";
import BrandOne from "../component/brand/BrandOne";
import CounterUpOne from "../component/counterup/CounterUpOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import PricingOne from "../component/pricing/PricingOne";
import ProjectOne from "../component/project/ProjectOne";
import ServicePropOne from "../component/service/ServicePropOne";
import TestimonialOne from "../component/testimonial/TestimonialOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import HeaderTwo from "../common/header/HeaderTwo";
import HeaderThree from "../common/header/HeaderThree";
import HeaderFour from "../common/header/HeaderFour";
import BannerTwo from "../component/banner/BannerTwo";
import BannerThree from "../component/banner/BannerThree";
import BannerFive from "../component/banner/BannerFive";
import BannerFour from "../component/banner/BannerFour";

const HomePage = () => {
  return (
    <>
      <SEO title="Digital Agency" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderThree />
        <BannerTwo />
        <AboutTwo />
        <ProjectOne parentClass="bg-color-light" />
      </main>
    </>
  );
};

export default HomePage;
