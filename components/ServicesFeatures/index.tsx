import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "@/components/ServicesFeatures/SingleFeature";
import featuresData from "@/components/ServicesFeatures/featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] pt-16 md:py-20 lg:pt-28"
      >
        <div className="container">
          <SectionTitle
            title="검증된 컨설팅 프로세스"
            paragraph1="산업계, 학계의 자문과 ESG Master의 지속적인 연구개발로 완성된 컨설팅 프로세스입니다. "
            paragraph2="많은 고객으로부터 그 효율성과 효과성을 입증받은 컨설팅 프로세스입니다."
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14  md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
