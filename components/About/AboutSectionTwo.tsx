import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-4.jpg"
                alt="about image"
                className=" overflow-hidden rounded-md object-cover object-center"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-2/3">
            <div className="wow fadeInUp " data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  ESG Master만의 경쟁력
                </h3>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  중소기업에 특화된 컨설팅 프로세스
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  인력과 자금이 부족한 중소기업을 위한 ESG 컨설팅 프로세스! 많은
                  중소기업들이 ESG Master 컨설팅에 만족하는 이유입니다.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  검증된 컨설턴트
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  공인된 자격과 전문가로 인정받는 학위 및 자격을 갖춘 최고
                  등급의 컨설턴트가 귀사를 기다리고 있습니다. 열정과 전문성으로
                  귀사의 ESG 경영을 돕겠습니다.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  완벽한 ESG보고서
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  컨설팅의 결과물은 명확해야 합니다. 정확한 자가진단과
                  목표설정에 따른 실행가능한 전략수립, 그리고 완벽한 ESG보고서를
                  제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
