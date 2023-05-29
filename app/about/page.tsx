import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import OurTeam from "@/components/About/OurTeam";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutFeatures from "@/components/AboutFeatures";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About" description="" />
      <AboutFeatures />
      <OurTeam />
      <AboutSectionTwo />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
