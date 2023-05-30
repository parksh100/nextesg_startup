import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 flex-col overflow-hidden pt-[120px] pb-16 md:flex md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="absolute top-0 right-0 z-[-1] lg:opacity-100">
            <img
              src="/images/cityview.jpg"
              alt="cityview"
              className="brightness-50"
            />
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center "
                data-wow-delay=".2s"
              >
                <h1 className="z-50 mt-40 mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-sm sm:leading-tight sm:text-white md:text-5xl md:leading-tight">
                  Why ESG?
                  <br className="block md:hidden" /> Why Now?
                </h1>
                <p className="mb-2 text-base font-medium !leading-relaxed text-black dark:text-white dark:opacity-90 sm:text-sm sm:text-white md:mb-12 md:text-xl ">
                  정부와 고객사가 ESG이행을 요구하고 있습니다. <br />
                  정량적인 기업실적을 나타내는 재무제표 만큼이나 비재무적,
                  정성적 요소인 ESG이행이 중요해지고 있습니다. 제도의 도입기에
                  막강한 혜택을 제대로 누리기 위해서는 우선 가능한 빨리
                  ESG이행을 위한 형식을 갖추는 것이 중요합니다.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-md bg-primary py-4 px-8 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 sm:text-base"
                  >
                    상담신청
                  </Link>
                  {/* <Link
                    href="/"
                    className="rounded-md bg-black py-4 px-8 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30 sm:text-base"
                  >
                    견적신청
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
