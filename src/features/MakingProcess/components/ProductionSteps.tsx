import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { steps } from "../content";

const ProductionSteps: React.FC = () => {
  return (
    <Card className="w-full medium:bg-[#141414] border-none rounded-[20px] medium:border-white/[.15] pt-4 pb-2">
      <CardHeader className="flex items-center justify-center medium:my-6 lg:my-0">
        <CardTitle className="text-[22px] medium:text-[44px] font-bold text-[#D9D9D9]">
          일반 제작
        </CardTitle>
        <CardDescription className="text-base medium:text-2xl font-normal">
          제작 시작 후 5영업일 이내
        </CardDescription>
      </CardHeader>
      <CardContent className="medium:mx-20 p-0 medium:p-6 xl:mx-8 lg:mx-0">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="mb-8 flex items-center w-full rounded-[15px] medium:rounded-[52px] border border-white/[.15] h-[93px] bg-[#141414] medium:bg-black/[.2] relative"
          >
            <div className="flex flex-col flex-[.3] pl-8 medium:pl-20 lg:pl-8">
              <h2 className="font-normal text-xs medium:text-base bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent">
                {step.number}
              </h2>
              <h2 className="font-bold text-lg medium:text-xl text-white">
                {step.title}
              </h2>
            </div>
            <div className="rounded-lg shadow-xl pl-6 py-4 flex-1">
              <p
                className="text-sm medium:text-base lg:text-sm xl:text-base leading-snug tracking-wide text-[#AAAAAA] text-opacity-100 max-w-[220px] medium:max-w-[280px]"
                dangerouslySetInnerHTML={{ __html: step.description }}
              ></p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[100%] w-0 h-0 border-l-[15px] border-l-transparent border-t-[10px] border-t-[#444444] border-r-[15px] border-r-transparent"></div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProductionSteps;
