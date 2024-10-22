import { offers } from "./content";

export default function Offers() {
  return (
    <section className="w-full mt-24 lg:mt-16 xl:mt-24 xl:h-screen flex justify-center items-center flex-col">
      <div className="text-center hidden medium:block mb-4">
        <h3 className="bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent text-2xl w-max">
          영상 제작소
        </h3>
      </div>
      <h1 className="text-2xl medium:text-[44px] font-extralight font-sans text-center">
        당장 내일{" "}
        <span className="font-bold block medium:inline">
          ‘고품질 맞춤 영상’<span className="font-normal">을 받아보세요.</span>
        </span>
      </h1>
      <div className="flex justify-center items-center flex-row gap-[1px] mt-16">
        {offers.map((offer, i) => (
          <div
            className="w-[90px] h-[90px] medium:w-[211.01px] medium:h-[211.01px] rounded-full border gradient-border flex justify-center items-center flex-col"
            key={i}
          >
            <div className="bg-[#141414] w-full h-full flex justify-center items-center flex-col rounded-full gap-2">
              <h4 className="bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent text-base medium:text-[32px] w-max font-bold w-[50%] medium:w-[70%] text-center leading-tight">
                {offer.name}
              </h4>
              <p className="bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent text-2xl w-max font-medium opacity-[60%] hidden medium:block">
                {offer.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center flex flex-col justify-center items-center px-8">
        <h3 className="text-lg medium:text-[32px] font-bold">
          AI VIDEO ON YOUR DEMAND
        </h3>
        <p className="text-base medium:text-xl medium:font-bold text-foreground/60 my-8">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등{" "}
          <br className=" medium:hidden" />
          국내 최고의 생성 AI 기술에 <br className="hidden medium:block" />
          영상 전문가의 터치를 더해 <br className=" medium:hidden" />
          비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
        </p>

        <p className="text-base medium:text-xl medium:font-bold text-foreground/60">
          가격은 절반으로, 속도는 두배로, 품질은 A++! <br /> 기업 홍보, 제품
          소개, 교육 및 행사, 정보 및 안내 영상 등 <br /> 당신이 필요한 '그
          영상'을 <br className=" medium:hidden" />
          플루닛 영상제작소에 맡겨주세요.
        </p>

        <div className="gradient-separator mt-10 medium:mt-24"></div>
      </div>
    </section>
  );
}
