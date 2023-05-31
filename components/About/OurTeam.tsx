export default function OurTeam() {
  return (
    <>
      <section className="text-gray-600 body-font">
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
          </div>
        </div>
      </section>
    </>
  );
}
