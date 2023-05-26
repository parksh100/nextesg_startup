import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "정부 'K-ESG 가이드라인 v1.0' 발표",
    paragraph:
      "정보공시, 환경, 사회, 지배구조 등 4개 영역, 61개 항목을 통해 기업들이 ESG경영 수준을 자체적으로 점검할 수 있도록 하고 있다. 중견/중소기업에 대해서는 4개 영역, 27개 항목을 선별해서 우선적으로 활용하도록 하고 있다.",
    image: "/images/blog/k-esg.png",
    url: "https://www.motie.go.kr/motie/gov3.0/gov_openinfo/sajun/bbs/bbsView.do?bbs_seq_n=631&bbs_cd_n=30",
    // author: {
    //   name: "Samuyl Joshi",
    //   image: "/images/blog/author-01.png",
    //   designation: "Graphic Designer",
    // },
    // tags: ["creative"],
    // publishDate: "2025",
  },
  {
    id: 2,
    title: "삼성전자, 반도체 산업의 ESG경영 기준 'SEPI' 제시",
    paragraph:
      "삼성전자가 개발한 반도체 산업에 적용할 수 있는 환경 평가지표. SEPI는 반도체 상산 공정에서 발생하는 환경영향을 평가하는 지표로, 반도체 산업의 ESG경영 기준으로 제시하기 위해 개발되었다.",
    image: "/images/blog/sepi.png",
    url: "https://semiconductor.samsung.com/kr/sustainability/environment/sepi/",
    // author: {
    //   name: "Musharof Chy",
    //   image: "/images/blog/author-02.png",
    //   designation: "Content Writer",
    // },
    // tags: ["computer"],
    // publishDate: "2025",
  },
  {
    id: 3,
    title: "수출기업 ESG경영 '공급망 대응 K-ESG 가이드라인' 발표",
    paragraph:
      "EU 등 주요국의 공급망 실사 법제화 및 글로벌 ESG이니셔티브를 중심으로 한 공급망 실사 확산에 대응하기 위해 '공급망 대응 K-ESG 가이드라인' 발표. EU는 개별 기업뿐만 아니라 협력사의 ESG 리스크를 실사하여 공시하는 공급망 실사 제도를 도입할 계획. ",
    image: "/images/blog/eu2.png",
    url: "https://www.motie.go.kr/motie/ne/presse/press2/bbs/bbsView.do?bbs_seq_n=166494&bbs_cd_n=81&currentPage=1&search_key_n=&cate_n=1&dept_v=&search_val_v=",
    // author: {
    //   name: "Lethium Deo",
    //   image: "/images/blog/author-03.png",
    //   designation: "Graphic Designer",
    // },
    // tags: ["design"],
    // publishDate: "2025",
  },
];
export default blogData;
