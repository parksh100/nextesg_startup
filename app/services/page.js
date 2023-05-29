import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
// import OurTeam from "@/components/About/OurTeam";
import Breadcrumb from "@/components/Common/Breadcrumb-service";
import ServicesFeatures from "@/components/ServicesFeatures";
import Process from "@/components/Services/Process";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Services" description="" />
      <ServicesFeatures />
      <Process />

      {/* <OurTeam /> */}
      {/* <ServicesSectionTwo />
      <ServicesSectionOne /> */}
    </>
  );
};

export default ServicesPage;
