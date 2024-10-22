import ProductionSteps from "./components/ProductionSteps";
import QuickService from "./components/QuickService";
import Step2 from "../../../public/step2.svg";
import Pencil from "../../../public/Subtract.svg";
import Step3 from "../../../public/step3.svg";
import Image from "next/image";

export default function MakingProcess() {
  return (
    <section className="w-full flex justify-center items-center flex-col mt-48 lg:mt-56 xl:mt-64">
      <div className="text-center relative">
        <h3 className="font-bold text-xl medium:text-5xl w-max bullet-header relative">
          MAKING PROCESS
        </h3>
        <div className="absolute medium:right-[-20px] medium:top-[-140px] left-[-30px] bottom-[-563px] z-[999] medium:left-[unset] medium:bottom-[unset]">
          <Image
            src={Pencil}
            alt={"Pen"}
            className="w-[25px] medium:w-[30px]"
          />
        </div>
        <div className="absolute medium:right-[-20px] medium:top-[-20px] left-[-45px] bottom-[-690px] z-[999] medium:left-[unset] medium:bottom-[unset]">
          <Image
            src={Step2}
            alt={"Movie"}
            className="w-[40px] medium:w-[56px]"
          />
        </div>
        <div className="absolute left-[-45px] bottom-[-840px] medium:hidden z-[999]">
          <Image
            src={Step3}
            alt={"Movie"}
            className="w-[40px] medium:w-[56px]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col medium:flex-row medium:mt-16 w-full">
        <div className="flex justify-center items-center flex-1 xl:pl-32 xl:pr-8 w-[90%] lg:pl-8 lg:pr-4">
          <ProductionSteps />
        </div>
        <div className="flex justify-center items-center flex-1 xl:pl-8 xl:pr-32 w-[90%] lg:pr-8 lg:pl-4">
          <QuickService />
        </div>
      </div>
      <div className="medium:my-16 text-[10px] medium:text-sm text-[#999999] text-center w-[80%] medium:w-full">
        <p className="mb-2">
          * 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등
          전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.
        </p>
        <p>
          ** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수
          있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
