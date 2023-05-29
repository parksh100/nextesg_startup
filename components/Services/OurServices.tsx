export default function OurTeam() {
  return (
    <>
      <section className="text-gray-600 body-font">
        {/* <div className="container mx-auto px-5 py-24">
          <div className="bg-slate-100  flex w-full flex-col">
            <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl ">
              Our Team
            </h1>
            <p className=" text-base font-medium leading-relaxed text-body-color lg:w-2/3">
              우리팀은 ESG의 역사적 근원에 대해 잘 이해하고 있습니다. <br />{" "}
              특히, ESG가 왜 필요한지 어떠한 이유로 도입에 동참해야 하는지 잘
              이해하고 있습니다.
              <br /> 무엇보다 ESG가 대한민국의 중소기업에 어떻게 적용되어야
              하는지에 대해 많은 연구와 시행착오를 겪었습니다.
              <br />
              성공적인 ESG도입 사례를 연구하고 경영지도사와 컨설팅학 석﹒박사의
              조언을 통해 <br />
              ESG Master만의 컨설팅 프로세스 구축에 성공하였습니다.
              <br />
              검증된 컨설팅 프로세스와 최고의 ESG컨설턴트와 함께 ESG도입에
              동참하십시오.
            </p>
            <br />
          </div>

          <div className="mb-20 flex w-full flex-col">
            <p className="text-base font-medium leading-relaxed text-body-color lg:w-2/3">
              국가가 인정한 컨설팅 전문가 <strong>경영지도사</strong> <br />{" "}
              경험과 학위로 증명된 컨설팅 전문가{" "}
              <strong>컨설팅학 석﹒박사</strong> <br /> ISO국제표준 전문가{" "}
              <strong>ISO선임심사위원</strong>
              <br />
              팀이 수행하는 ESG컨설팅은 더욱 신뢰할 수 있습니다.,
            </p>
          </div>
        </div> */}
        <div className="container mx-auto px-5 pb-24">
          <div className="-m-2 mt-10 flex flex-wrap">
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="border-gray-200 flex h-full items-center rounded-lg border p-4">
                <img
                  alt="team"
                  className="bg-gray-100 mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-top"
                  src="/images/about/psh.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">박성훈</h2>
                  <p className="text-body-color">
                    대표컨설턴트/ 경영지도사/ ISO검증심사원{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="border-gray-200 flex h-full items-center rounded-lg border p-4">
                <img
                  alt="team"
                  className="bg-gray-100 mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-top"
                  src="/images/about/ljy.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">이주용</h2>
                  <p className="text-body-color">
                    컨설팅학 석사/ 컨설팅학 겸임교수/ ISO선임심사원
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="border-gray-200 flex h-full items-center rounded-lg border p-4">
                <img
                  alt="team"
                  className="bg-gray-100 mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center"
                  src="/images/about/mjs.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">명준식</h2>
                  <p className="text-body-color">
                    컨설팅학 석사/ 경영지도사/ 전경련ESG전문가
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="border-gray-200 flex h-full items-center rounded-lg border p-4">
                <img
                  alt="team"
                  className="bg-gray-100 mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center"
                  src="/images/about/his.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">허인식</h2>
                  <p className="text-body-color">
                    수석 컨설턴트/ 신용보증기금 21년 근무
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="border-gray-200 flex h-full items-center rounded-lg border p-4">
                <img
                  alt="team"
                  className="bg-gray-100 mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center"
                  src="/images/about/psb.jpg"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">박수빈</h2>
                  <p className="text-body-color">
                    프로젝트 매니저/ 국가안전대진단전문위원
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="border-gray-200 flex h-full items-center rounded-lg border p-4">
                <img
                  alt="team"
                  className="bg-gray-100 mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-bold">강근영</h2>
                  <p className="text-body-color">수석 컨설턴트/ 행정사</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
