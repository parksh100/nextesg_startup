import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "@/components/AboutFeatures/SingleFeature";
import featuresData from "@/components/AboutFeatures/featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="최고의 컨설턴트"
            paragraph1="엄격한 자격요건을 통과한 최고의 컨설턴트들이 ESG 컨설팅을 진행합니다. "
            paragraph2="자신있습니다. "
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
