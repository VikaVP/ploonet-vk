import Step1 from "../../../public/step1.svg";
import Step3 from "../../../public/step3.svg";

interface Step {
  number: string;
  title: string;
  description: string;
  img?: string;
}

export const steps: Step[] = [
  {
    number: "STEP1",
    title: "사전 논의",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 <br/>상담을 통해 방향 설정 및 내용 협의",
  },
  {
    number: "STEP2",
    title: "영상 기획",
    description:
      '스토리보드 전달&수정을 통한 기획안 확정, <br class="hidden medium:block"/>가상인간 발화용 스크립트 작성과 프롬프팅',
  },
  {
    number: "STEP3",
    title: "영상 생성",
    description:
      '작성한 스크립트로 가상인간 영상 생성 <br class="hidden medium:block"/>그외 이미지, 배경 음악 등 필요 요소 생성',
  },
  {
    number: "STEP4",
    title: "영상 편집",
    description:
      '영상 전문가의 편집, 디자인, 후반 작업 단계 <br class="hidden medium:block"/>필요시 실사 촬영 병행하여 편집본 완성',
  },
  {
    number: "STEP5",
    title: "최종 납품",
    description:
      '고객 피드백 반영하여 최종본 완성 및 납품 <br class="hidden medium:block"/>* 영상 수정 무료 1회 제공',
  },
];

export const serviceSteps: Step[] = [
  {
    number: "STEP1",
    title: "제작 안내",
    description:
      "영상 제작 문의를 통해 의뢰 확인 후 <br/>견적 및 진행 순서 안내",
    img: Step1,
  },
  {
    number: "STEP2",
    title: "영상 생성",
    description:
      '스크립트 수신 즉시 가상인간 영상 생성 <br class="hidden medium:block"/>그외 이미지, 배경 음악 등 필요 요소 생성',
    // img: Step2,
  },
  {
    number: "STEP3",
    title: "편집 및 납품",
    description: "편집 진행, 12~48시간 내 최종본 완성 및 납품",
    img: Step3,
  },
];
