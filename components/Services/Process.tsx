export default function Process() {
  return (
    <div className=" mx-auto mt-10 text-center md:w-full">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-5">
          <div className="relative mx-auto flex pt-10 pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="title-font text-slate-200 relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-medium sm:mt-0">
              1
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  {/* <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> */}
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  1. 고객 요구사항의 이해
                </h2>
                <p className="text-start leading-relaxed">
                  ESG 원칙에 대한 고객의 현재 이해정도 및 이행상황을 평가하는
                  것부터 시작합니다. 여기에는 조직의 주요 이해 관계자와의 회의,
                  설문 조사 또는 인터뷰가 포함될 수 있습니다. 조직의 목표, 산업
                  및 조직이 운영하는 규제 환경을 이해해야 합니다. 목표는 조직이
                  가지고 있는 ESG 격차와 이를 해결하기 위한 동기를 식별하는
                  것입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className=" title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              2
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  2. ESG자가진단
                </h2>
                <p className="text-start leading-relaxed">
                  고객에 대한 ESG 내부심사를 실시합니다. 여기에는 운영, 사회
                  정책(예: 근로조건, 다양성 및 포용성 등), 거버넌스 구조의
                  환경적 영향을 살펴보는 것이 포함됩니다. 이렇게 하면 현재
                  상황을 명확하게 파악하고 개선이 필요한 영역을 식별하는 데
                  도움이 됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              3
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  {/* <circle cx="12" cy="5" r="3"></circle>
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path> */}
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  3. 벤치마킹
                </h2>
                <p className="text-start leading-relaxed">
                  고객의 ESG 성과를 동종 업계 또는 모범 사례와 비교합니다. 이
                  단계는 상대적인 강점과 약점을 식별하는 데 도움이 됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-10 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              4
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  {/* <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle> */}
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <line x1="10" y1="7" x2="14" y2="7"></line>
                  <line x1="7" y1="10" x2="7" y2="14"></line>
                  <line x1="17" y1="17" x2="21" y2="17"></line>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  4. 전략개발
                </h2>
                <p className="text-start leading-relaxed">
                  조직을 위한 맞춤형 ESG 전략을 개발하고 명확하고 달성 가능한
                  목표와 이정표를 설정합니다. 여기에는 새로운 정책 권고, 기존
                  절차의 변경, 교육 프로그램, 이해관계자 참여 전략 등이 포함될
                  수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pt-10 pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              5
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  {/* <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> */}
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <path d="M3 7h18"></path>
                  <path d="M9 14l2 2 4-4"></path>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  5. 실행계획 수립
                </h2>
                <p className="text-start leading-relaxed">
                  고객과 협력하여 ESG 전략 실행을 위한 세부 계획을 수립합니다.
                  여기에는 일반적으로 타임라인, 다른 팀 구성원에 대한 명확한
                  책임, 모니터링 및 평가 시스템이 포함됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              6
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  {/* <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path> */}
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  6. 교육 및 역량 구축
                </h2>
                <p className="text-start leading-relaxed">
                  식별된 요구 사항에 따라 직원에게 새로운 정책 또는 절차에 대한
                  교육을 제공하거나 ESG 문제를 모니터링하고 관리하는 회사의
                  역량을 구축합니다
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              7
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  {/* <path d="M10 22l-6-6m0 0a9 9 0 1 1 12 0l-6 6z"></path> */}
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  7. 보고 및 커뮤니케이션
                </h2>
                <p className="text-start leading-relaxed">
                  국내외 지침에 따라 투명한 ESG 보고 구조를 개발하도록 고객을
                  지원합니다. 또한 조직이 이해관계자에게 ESG 노력을 효과적으로
                  전달하도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pb-10 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              8
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  8. 모니터링 및 평가
                </h2>
                <p className="text-start leading-relaxed">
                  ESG 목표에 대한 조직의 진행 상황을 추적하기 위한 시스템을
                  개발하고 정기적인 업데이트 및 피드백을 제공합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex pt-10 pb-20 sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex h-full w-6 items-center justify-center">
              <div className="bg-gray-200 pointer-events-none h-full w-1"></div>
            </div>
            {/* <div className="bg-indigo-500 title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white sm:mt-0">
              9
            </div> */}
            <div className="flex flex-grow flex-col items-start pl-6 sm:flex-row sm:items-center md:pl-8">
              <div className="round-full me-10 rounded-full bg-yellow p-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                >
                  {/* <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> */}
                  <path d="M3 21h6v-6h6v-6h6V3"></path>
                </svg>
              </div>
              <div className="mt-6 flex-grow sm:mt-0 sm:pl-6">
                <h2 className="title-font text-gray-900 mb-2 text-start text-xl font-bold">
                  9. 지속적인 개선
                </h2>
                <p className="text-start leading-relaxed">
                  ESG는 일회성 프로세스가 아니라 지속적인 여정입니다. 필요에
                  따라 ESG 전략을 조정하고 조직이 진화하는 ESG 기대치 및 표준에
                  대응할 수 있도록 지속적인 지원을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
